// 영화 상세페이지
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Detail() {
   return (
      <Wrap>
         <Menu />
         <Main $padding="30px 0">Detail 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default Detail
