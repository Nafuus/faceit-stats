import { useState } from 'react'
import { Button } from '@/components/ui/button'

const players = [
  'niko',
  'm0NESY',
  'ZywOo',
  'donk',
  'rain',
  'ropz',
  'brokyy',
  'Perfecto',
  'electronic',
]

export default function PlayerChoice({ onPlayerChoiceClick }) {
  const [randomPlayers, setRandomPlayers] = useState(() => {
    const shuffledIndexes = [...Array(players.length).keys()].sort(
      () => Math.random() - 0.5,
    )
    return shuffledIndexes.slice(0, 3).map((index) => players[index])
  })

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
