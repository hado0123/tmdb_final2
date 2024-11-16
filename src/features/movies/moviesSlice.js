import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { searchMovie } from '../../api/tmdbApi'

/*
createAsyncThunk의 async 함수에서 매개변수로 2개 이상의 값을 받으려면 
객체 혹은 배열 로 전달한다.
*/
// 영화 검색
export const fetchSearchResults = createAsyncThunk('movies/fetchSearchResults', async ({ query, page }) => {
   const response = await searchMovie(query, page)
   return response.data.results
})

const moviesSlice = createSlice({
   name: 'movies',
   initialState: {
      loading: false,
      error: null,
      searchResults: [],
   },
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(fetchSearchResults.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(fetchSearchResults.fulfilled, (state, action) => {
            state.loading = false

            // 페이지가 1페이지 일때(맨 처음에 검색 했을때)는 그냥 새로운 state로 업데이트
            if (action.meta.arg.page === 1) {
               state.searchResults = action.payload // response.data.results
            } else {
               //페이지가 2이상일때는 기존 데이터 + 새로운 데이터로 state 업데이트
               state.searchResults = [...state.searchResults, ...action.payload]
            }
         })
         .addCase(fetchSearchResults.rejected, (state, action) => {
            state.loading = false
            state.error = action.error.message
         })
   },
})

export default moviesSlice.reducer
