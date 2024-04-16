import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

import {
  useGetMatchRoomPlayerQuery,
  useGetMatchRoomQuery,
} from '@/api/faceitApi'

import './matchRoom.css'
import { MatchResult } from './components/matchResult'
import { Scoreboard } from './components/scoreboard'

export const MatchRoom = () => {
  const matchId = useSelector((state) => state.faceitData.matchId)

  const {
    data: matchRoom,
    isLoading,
    isError,
    error,
  } = useGetMatchRoomQuery({ matchId })

  const {
    data: matchRoomPlayer,
    isLoading: isLoadingMatchRoomPlayer,
    isError: isErrorMatchRoomPlayer,
    error: errorMatchRoomPlayer,
  } = useGetMatchRoomPlayerQuery({ matchId })

  if (isLoading || isLoadingMatchRoomPlayer)
    return <h1 className="loading">Loading...</h1>
  if (isError || isErrorMatchRoomPlayer)
    return (
      <div>
        <h1>Error:</h1>
        {error.status} {JSON.stringify(error.data)}
        {errorMatchRoomPlayer.status}
        {JSON.stringify(errorMatchRoomPlayer.data)}
      </div>
    )
  return (
    <div className="match_room">
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
    </div>
  )
}
