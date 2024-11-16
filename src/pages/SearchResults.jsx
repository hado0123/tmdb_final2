// 검색결과
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function SearchResults() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">SearchResults 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default SearchResults
