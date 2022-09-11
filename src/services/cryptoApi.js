// import axios from "axios";

// const options = {
//   method: 'GET',
//   url: 'https://coinranking1.p.rapidapi.com/coins',
//   params: {
//     referenceCurrencyUuid: 'yhjMzLPhuIDl',
//     timePeriod: '24h',
//     'tiers[0]': '1',
//     orderBy: 'marketCap',
//     orderDirection: 'desc',
//     limit: '50',
//     offset: '0'
//   },
//   headers: {
//     'X-RapidAPI-Key': '75ec4d4974mshb16eb7604c1ad26p119c9cjsndb1a66d44ad7',
//     'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
//   }
// };

// axios.request(options).then(function (response) {
// 	console.log(response.data);
// }).catch(function (error) {
// 	console.error(error);
// });

import {fetchBaseQuery, createApi} from '@reduxjs/toolkit/query/react';

const CryptoApiHeaders = {
        'X-RapidAPI-Key': '75ec4d4974mshb16eb7604c1ad26p119c9cjsndb1a66d44ad7',
        'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
      }

const baseUrl = 'https://coinranking1.p.rapidapi.com';

const createRequest = (url) => ({url, headers: CryptoApiHeaders});

export const cryptoApi = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl, headers: CryptoApiHeaders }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`),
        })
    })
})

export const {
    useGetCryptosQuery,
} = cryptoApi;