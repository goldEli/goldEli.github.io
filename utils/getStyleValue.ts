// 数去元素属性
export default function getStyleValue(
  dom: HTMLElement,
  attr: keyof CSSStyleDeclaration
) {
  const style = getComputedStyle(dom);
  const value = style[attr] as string;
  return parseFloat(value);
}
