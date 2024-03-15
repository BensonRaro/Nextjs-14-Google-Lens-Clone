"use server";

import axios from "axios";

export const Lens = async (url?: string) => {
  const options = {
    method: "GET",
    url: "https://google-lens-image-search1.p.rapidapi.com/api/v1/google-lens/search/",
    params: {
      query_url: url,
    },
    headers: {
      "X-RapidAPI-Key": "24ce49778fmsh0c6582e958568fap1685fcjsn785372aeb832",
      "X-RapidAPI-Host": "google-lens-image-search1.p.rapidapi.com",
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
