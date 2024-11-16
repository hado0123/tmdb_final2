import axios from 'axios'

const BASE_URL = 'https://api.themoviedb.org/3'

const AUTH_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1ZDI5ZmIzYTNiOGFkZjkzYzNkNTQxNDU4OTczNzA0OSIsIm5iZiI6MTczMTEzOTMzMy41MDE3ODk4LCJzdWIiOiI2MjRkNDM0MWMzOTI2NjAwNGY5Mjk4YmUiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.sbGIBJF7CiWRgLhxlsN8wrbtu7rxg6TVycCf3mIVwo0'

const tmdbApi = axios.create({
   baseURL: BASE_URL,
   headers: {
      accept: 'application/json', // response데이터를 json객체로 달라고 서버에게 요청
      Authorization: `Bearer ${AUTH_KEY}`,
   },
})

export const searchMovie = async (query, page = 1) => {
   // ?query=베놈&include_adult=false&language=ko-KR&page=1&region=KR
   const response = await tmdbApi.get('/search/movie', {
      params: {
         query,
         page,
         language: 'ko-KR',
         include_adult: false,
         region: 'KR',
      },
   })

   return response
}

export default tmdbApi
