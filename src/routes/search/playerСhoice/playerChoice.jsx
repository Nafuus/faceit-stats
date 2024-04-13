import { Button } from '@/components/ui/button'

const players = [
  'niko',
  'm0NESY',
  'ZywOo',
  'donk666',
  'rain',
  'ropz',
  'brokyy',
  'Perfecto',
  'electronic',
]

const shuffledIndexes = [...Array(players.length).keys()].sort(
  () => Math.random() - 0.5,
)

export const PlayerChoice = ({ onPlayerChoiceClick }) => {
  const randomPlayers = shuffledIndexes
    .slice(0, 3)
    .map((index) => players[index])

  return (
    <>
      <h4 className="playerChoice_title">Choose player</h4>
      <div className="search_wrapper">
        {randomPlayers.map((player, index) => (
          <Button
            key={index}
            onClick={() => onPlayerChoiceClick(player)}
            style={{ marginLeft: '10px' }}
          >
            {player}
          </Button>
        ))}
      </div>
    </>
  )
}
