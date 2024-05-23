import { TMarketItem } from "@/types";

export const getTopCreators = (creators: TMarketItem[]) => {
  const finalCreators: {
    seller: string,
    total: number
  }[] = [];

  const finalResults = creators.reduce((index, currentValue) => {
    (index[currentValue.seller] = index[currentValue.seller] || []).push(
      currentValue
    );

    return index;
  }, {} as { [key in string]: TMarketItem[] });

  Object.entries(finalResults).forEach((item) => {
    const seller = item[0];
    const total = item[1]
      .map((newItem) => Number(newItem.price))
      .reduce((previousValue, currentValue) => previousValue + currentValue, 0);

    finalCreators.push({ seller, total});
  });

  return finalCreators;
};
