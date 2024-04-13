import { useSelector } from 'react-redux'
import { useGetMatchRoomQuery } from '@/api/faceitApi'
import { MapIconFilter } from '@/components/mapIconFilter'

export const MatchRoom = () => {
  const matchId = useSelector((state) => state.faceitData.matchId)

  const {
    data: matchRoom,
    isLoading,
    isError,
    error,
  } = useGetMatchRoomQuery({ matchId })

  if (isLoading) return <h1 className="loading">Loading...</h1>
  if (isError)
    return (
      <div>
        <h1>Error:</h1>
        {error.status} {JSON.stringify(error.data)}
      </div>
    )
  return (
    <>
      <MapIconFilter icon={matchRoom?.rounds[0].round_stats.Map} />
      <div>{matchRoom?.rounds[0].round_stats.Map}</div>
    </>
  )
}
