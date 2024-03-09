import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, useData] = useState({});
  useEffect(() => {
    fetch(
      `https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`
    ).then((res)=> res.json())
    .then((res) => useData(res[currency]));
    console.log(data);
  }, [currency]);
  return data;
}

export default useCurrencyInfo;
