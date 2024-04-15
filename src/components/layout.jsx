import { Outlet } from 'react-router-dom'

import { Search } from '../routes/search/search'
import { Header } from './header/header'

export const Layout = () => {
  return (
    <>
      <Header />
      <Search />
      <Outlet />
    </>
  )
}
