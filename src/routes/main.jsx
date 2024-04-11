import Search from './search/search'
import Player from './player/player'
import Matches from './matches/matches'
import Maps from './maps/maps'
import MatchRoom from './matchRoom/matchRoom'
import Faq from './faq/faq'
import Layout from './layout'
import { Routes, Route } from 'react-router-dom'

function Main() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="player" element={<Player />} />
          <Route path="matches" element={<Matches />} />
          <Route path="maps" element={<Maps />} />
          <Route path="matchRoom" element={<MatchRoom />} />
          <Route path="faq" element={<Faq />} />
          {/* <Route path="*" element={<Notfound />} /> */}
        </Route>
      </Routes>
    </div>
  )
}

// добавить отдельные страницы для каждой матч румы

// стилизовать progressBar
// Взять еще статистики из Faceit Stats
// Мб сделать player основной страницей
// поправить warning от faceitStat в поисковике (после того как написал адекватный ник и написал неверный не выдается ошибка)
// глянуть может быть в api фейсита есть тиммейты

export default Main
