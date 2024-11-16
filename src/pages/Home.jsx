// 메인페이지
import '../styles/common.css'
import { Wrap, Main } from '../styles/StyledComponent'
import Menu from '../components/Menu'
import Footer from '../components/Footer'

function Home() {
   return (
      <Wrap>
         <Menu />
         <Main>Main 페이지</Main>
         <Footer />
      </Wrap>
   )
}

export default Home
