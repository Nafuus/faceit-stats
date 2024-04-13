import { Outlet } from 'react-router-dom'

import { Search } from './search/search'
import { Header } from '../components/header/header'
// import { Footer } from '../components/footer/footer'

export const Layout = () => {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}
