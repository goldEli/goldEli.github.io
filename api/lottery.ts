export const getLotteryList = () => {
  const res = $fetch<API.Lottery.GetLotteryList.Result>(
    "https://webapi.sporttery.cn/gateway/lottery/getHistoryPageListV1.qry?gameNo=85&provinceId=0&pageSize=30&isVerify=1&pageNo=1"
  );

  return res;
};
