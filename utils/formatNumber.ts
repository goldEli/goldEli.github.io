export default function formatNumber(num?: number) {
  if (!num) {
    return 0;
  }
  if (num < 1000) {
    return String(num);
  }

  const million = 1000000;
  const thousand = 1000;
  if (num >= million) {
    return `${handleStr(num, million)}M`;
  }

  return `${handleStr(num, thousand)}K`;
}

function handleStr(num: number, unit: number) {
  let newNum = Number(num / unit);
  let res = newNum.toFixed(1);
  if (res.split(".")[1] === "0") {
    return parseInt(num / unit + "");
  }
  return `${res}`;
}
