import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';


// const options = {
//     method: 'GET',
//     url: 'https://bing-news-search1.p.rapidapi.com/news',
//     params: {safeSearch: 'Off', textFormat: 'Raw'},
//     headers: {
//       'X-BingApis-SDK': 'true',
//       'X-RapidAPI-Key': '75ec4d4974mshb16eb7604c1ad26p119c9cjsndb1a66d44ad7',
//       'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
//     }
//   };
  
//   axios.request(options).then(function (response) {
//       console.log(response.data);
//   }).catch(function (error) {
//       console.error(error);
//   });

const cryptoNewsHeaders = {
          'X-BingApis-SDK': 'true',
          'X-RapidAPI-Key': '75ec4d4974mshb16eb7604c1ad26p119c9cjsndb1a66d44ad7',
          'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
        }

const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: cryptoNewsHeaders});

export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: cryptoNewsHeaders }),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
        })
    })
});


