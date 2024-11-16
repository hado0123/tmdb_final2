// 검색결과
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchSearchResults } from '../features/movies/moviesSlice'

import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'
import MovieCard from '../components/MovieCard'

function SearchResults() {
   const [searchParams] = useSearchParams() //query 파라미터 값 가져오기
   const query = searchParams.get('query') // 검색어
   const [page, setPage] = useState(1) // 페이지 번호 state

   const dispath = useDispatch()
   const { searchResults, loading, error } = useSelector((state) => state.movies)

   useEffect(() => {
      dispath(fetchSearchResults({ query, page: 1 }))
   }, [dispath])

   if (loading && page === 1) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <h2>검색중..</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   if (error) {
      return (
         <Wrap>
            <Menu />
            <Main $padding="30px 0">
               <h2>오류발생: {error}</h2>
            </Main>
            <Footer />
         </Wrap>
      )
   }

   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">
            <MovieCard movies={searchResults} />
         </Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
