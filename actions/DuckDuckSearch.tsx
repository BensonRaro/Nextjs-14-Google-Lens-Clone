"use server";

import axios from "axios";

export const DuckDuckSearch = async (
  endpoint: string,
  query: string | undefined
) => {
  const options = {
    method: "GET",
    url: `https://duckduckgo10.p.rapidapi.com/search${endpoint}`,
    params: {
      term: query,
      safeSearch: "off",
      region: "wt-wt",
    },
    headers: {
      "X-RapidAPI-Key": "b2c40c440dmsh1dfac47e352171ep11959djsn98863fd540a2",
      "X-RapidAPI-Host": "duckduckgo10.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    // console.log(response.data);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
