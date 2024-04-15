import { useSelector } from 'react-redux'
import { FlagIcon } from 'react-flag-kit'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { PlayerLvlFilter } from '@/components/playerLvlFilter'

import { PlayerBox } from './playerBox/playerBox'
import { ProgressBar } from './progressBar/progressBar'
import './player.css'

export const Player = () => {
  const player = useSelector((state) => state.faceitData.player)
  const matches = useSelector((state) => state.faceitData.matches)
  const faceitStats = useSelector((state) => state.faceitData.faceitStats)

  const activatedAt = new Date(faceitStats?.activated_at)
  const date = activatedAt.toDateString()
  const time = activatedAt.toLocaleTimeString()

  return (
    <>
      <div className="player">
        <Avatar>
          <AvatarImage src={faceitStats?.avatar} alt="avatar" />
          <AvatarFallback>{matches?.segments[0]?.nickname}</AvatarFallback>
        </Avatar>
        <div className="player_info">
          <div className="profile_wrapper">
            <a
              href={faceitStats?.faceit_url}
              className="elo"
              target="_blank"
              rel="noopener noreferrer"
            >
              {matches?.segments[0]?.nickname}
            </a>
            <FlagIcon code={faceitStats?.country.toUpperCase()} />
          </div>
          <div className="profile_wrapper">
            <div className="elo">{player?.current_elo} elo</div>
            <PlayerLvlFilter
              lvl={faceitStats?.games.cs2.skill_level}
              className="player_lvlIcon"
            />
          </div>
        </div>
      </div>
      <PlayerBox player={player} />
      <ProgressBar player={player} />
      <div className="player_wrapper">
        <div className="OtherPlayerStats">
          <div>
            <div>Steam ID: {faceitStats?.steam_id_64}</div>
            <div>Steam nickname: {faceitStats?.steam_nickname}</div>
          </div>
          <div>
            <div>Date registration: {`${date} ${time}`} </div>
            <div>Memberships: {faceitStats?.memberships}</div>
          </div>
        </div>
      </div>
    </>
  )
}
