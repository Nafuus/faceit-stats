import { MatchResult } from './components/matchResult'
import { Scoreboard } from './components/scoreboard'
import './playersRoom.css'

export const PlayersRoom = ({ matchRoomPlayer, matchRoom }) => {
  return (
    <>
      <MatchResult matchRoomPlayer={matchRoomPlayer} matchRoom={matchRoom} />
      <Scoreboard
        matchRoomPlayer={matchRoomPlayer}
        matchRoom={matchRoom}
        teamNum={0}
      />
      <Scoreboard
        matchRoomPlayer={matchRoomPlayer}
        matchRoom={matchRoom}
        teamNum={1}
      />
    </>
  )
}
