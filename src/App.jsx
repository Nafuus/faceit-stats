import React from 'react'
import { Routes, Route } from 'react-router-dom'

import { Player } from './routes/player/player'
import { Matches } from './routes/matches/matches'
import { Maps } from './routes/maps/maps'
import { MatchRoom } from './routes/matchRoom/matchRoom'
import { Faq } from './routes/faq/faq'
import { NotFound } from './routes/notFound/notFound'
import { Layout } from './components/layout'

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
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  )
}

// из функционала TODO:
// кешировать потом иконки и прочую хуйню
// добавить мемоизацию
// добавить англ/рус язык
// добавит другого разного функционала
// добавить темную тему
// можно добавить кнопку чтобы playerChoice обновлял рандом и были новые игркои
// https://dribbble.com/
