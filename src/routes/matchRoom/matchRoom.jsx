import { useSelector } from 'react-redux'
import { Button } from '@/components/ui/button'

import {
  useGetMatchRoomPlayerQuery,
  useGetMatchRoomQuery,
} from '@/api/faceitApi'

import './matchRoom.css'
import { PlayersRoom } from './playersRoom/playersRoom'

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

  //
  const huysosifaceit = () => {
    console.log('matchRoom:', matchRoom)
    console.log('matchRoomPlayer:', matchRoomPlayer)
  }

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
      <PlayersRoom matchRoomPlayer={matchRoomPlayer} matchRoom={matchRoom} />
    </div>
  )
}
