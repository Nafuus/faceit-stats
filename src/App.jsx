import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Search } from './routes/search/search'
import { Player } from './routes/player/player'
import { Matches } from './routes/matches/matches'
import { Maps } from './routes/maps/maps'
import { MatchRoom } from './routes/matchRoom/matchRoom'
import { Faq } from './routes/faq/faq'
import { Layout } from './routes/layout'

export const App = () => {
  return (
    <>
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
    </>
  )
}

// стилизовать progressBar
// Взять еще статистики из Faceit Stats
// Мб сделать player основной страницей
// глянуть может быть в api фейсита есть тиммейты

// леаут в компонентс
// если что то повторяется вынсить в отдельную константу
// логика за компонент и принимать аргументы. Создаваьт объект аргументов
// не использовать export default
// @ от scr
// подправить импорты везде
// кешировать потом иконки и прочую хуйню
// в {data.huy 'huy'} вместо такого делать {`${data.huy} huy`}

// из функционала TODO:
// добавить мемоизацию
// добавить англ/рус язык
// добавит другого разного функционала
// добавить темную тему
// можно добавить кнопку чтобы playerChoice обновлял рандом и были новые игркои
// https://dribbble.com/
