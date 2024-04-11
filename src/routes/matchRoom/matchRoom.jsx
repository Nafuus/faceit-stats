import { useSelector } from 'react-redux'

function MatchRoom() {
  const matchRoom = useSelector((state) => state.faceitData.matchRoom)

  return (
    <>
      <div>Map:{matchRoom?.rounds[0].round_stats.Map}</div>
    </>
  )
}

export default MatchRoom
