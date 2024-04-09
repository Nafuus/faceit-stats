import Search from './search/search'
import Header from '../components/header/header'
import Footer from '../components/footer/footer'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default Layout
