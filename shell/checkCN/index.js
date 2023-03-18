const path = require("path");
const fs = require("fs");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const compiler = require("@vue/compiler-sfc");

const rootDir = process.cwd();
console.log(rootDir);

const dirs = ["pages", "components", "composables", "utils", "api"];
const fileExtension = [".vue", "ts"];

function readFile(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, "utf8", (err, data) => {
      if (err) {
        console.error(err);
        return;
      }
      resolve(data);
    });
  });
}

/**
 * 文件遍历方法
 * @param filePath 需要遍历的文件路径
 */
function getFilesByDir(filePath, callback) {
  //根据文件路径读取文件，返回文件列表
  fs.readdir(filePath, function (err, files) {
    if (err) {
      console.warn(err);
    } else {
      //遍历读取到的文件列表
      files.forEach(function (filename) {
        //获取当前文件的绝对路径
        var filedir = path.join(filePath, filename);
        //根据文件路径获取文件信息，返回一个fs.Stats对象
        fs.stat(filedir, function (eror, stats) {
          if (eror) {
            console.warn("获取文件stats失败");
          } else {
            var isFile = stats.isFile(); //是文件
            var isDir = stats.isDirectory(); //是文件夹
            if (isFile) {
              if (fileExtension.some((item) => filedir.endsWith(item))) {
                callback(filedir);
              }
            }
            if (isDir) {
              getFilesByDir(filedir, callback); //递归，如果是文件夹，就继续遍历该文件夹下面的文件
            }
          }
        });
      });
    }
  });
}

/**
 * 代码字符串转成语法树
 * @param {*} code
 */
function codeToAst(code) {
  const ast = parser.parse(code, {
    sourceType: "module", // 识别ES Module
    plugins: [
      //   "jsx", // enable jsx
      //   "vue",
      "typescript",
      "classProperties",
    ],
  });
  return ast;
}

/**
 * 遍历语法树，将中文替换成变量
 * @param {*} ast
 */
function handleAst(ast) {
  return new Promise((resolve, reject) => {
    // 遍历语法树
    traverse(ast, {
      StringLiteral({ node }) {
        if (node && isChinese(node.value)) {
          resolve(true);
        }
      },
      TemplateElement({ node }) {
        if (node.value && node.value.cooked && isChinese(node.value.cooked)) {
          resolve(true);
        }
      },
    });
  });
}

function isChinese(str) {
  var filter = /[\u4E00-\u9FA5\uF900-\uFA2D]{1,}/;
  if (filter.test(str)) {
    return true;
  } else {
    return false;
  }
}

async function checkCodeHasChinese(code, filename) {
  const ast = codeToAst(code);
  const res = await handleAst(ast);
  if (res) {
    // console.log(JSON.stringify(ast));
    console.log("此文件存在中文", filename);
  }
}

async function main() {
  for (const dir of dirs) {
    getFilesByDir(path.join(rootDir, dir), async (fileName) => {
      const fileStr = await readFile(fileName);
      // 如果是ts文件
      if (fileName.endsWith(".ts")) {
        checkCodeHasChinese(fileStr, fileName);
        return;
      }

      const parsed = compiler.parse(fileStr);

      const compileTemplate = compiler.compileTemplate({
        source: parsed.descriptor.template.content,
      });
      checkCodeHasChinese(compileTemplate.code, fileName);
      if (parsed.descriptor?.scriptSetup) {
        let compileredScript = compiler.compileScript(parsed.descriptor, {
          source: parsed.descriptor?.scriptSetup?.content,
        });
        checkCodeHasChinese(compileredScript.content, fileName);
      }
    });
  }
}

main();
