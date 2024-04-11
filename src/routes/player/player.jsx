import { useSelector } from 'react-redux'
import './player.css'
import ProgressBar from './progressBar/progressBar'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function Player() {
  const player = useSelector((state) => state.faceitData.player)
  const matches = useSelector((state) => state.faceitData.matches)
  const faceitStats = useSelector((state) => state.faceitData.faceitStats)

  return (
    <>
      <div className="player">
        <Avatar>
          <AvatarImage src={faceitStats?.avatar} alt="avatar" />
          <AvatarFallback>{matches?.segments[0]?.nickname}</AvatarFallback>
        </Avatar>
        <div>
          <div>{matches?.segments[0]?.nickname}</div>
          <div>{player?.current_elo} elo</div>
          <div>{faceitStats?.games.cs2.skill_level || 'Not found'} lvl</div>
        </div>
      </div>
      <div className="player_wrapper">
        {/* avg stats */}
        <div className="box">
          <div className="main_stats">
            <h2 className="title">Avg.kd</h2>
            <p
              style={{
                color:
                  player?.avg_kdr > 1.1
                    ? 'rgb(19, 201, 19)'
                    : player?.avg_kdr >= 1 && player?.avg_kdr <= 1.1
                      ? 'rgb(156, 167, 61)'
                      : 'rgb(240, 27, 45)',
              }}
            >
              {player?.avg_kdr}
            </p>
          </div>
          <div className="stats">
            <div>Avg.kr</div>
            <div>{player?.avg_krr}</div>
          </div>
          <div className="stats">
            <div>Avg.kills</div>
            <div>{player?.avg_k}</div>
          </div>
          <div className="stats">
            <div>Avg.deaths</div>
            <div>{player?.avg_d}</div>
          </div>
        </div>
        {/* hltv rating and total kills and deaths */}
        <div className="box">
          <div className="main_stats">
            <h2 className="title">HLTV</h2>
            <p
              style={{
                color:
                  player?.avg_hltv > 1.08
                    ? 'rgb(19, 201, 19)'
                    : player?.avg_hltv >= 0.98 && player?.avg_hltv <= 1.08
                      ? 'rgb(156, 167, 61)'
                      : 'rgb(240, 27, 45)',
              }}
            >
              {player?.avg_hltv}
            </p>
          </div>
          <div className="stats">
            <div>Real kd</div>
            <div>{player?.real_kdr}</div>
          </div>
          <div className="stats">
            <div>Kills</div>
            <div>{player?.k}</div>
          </div>
          <div className="stats">
            <div>Deaths</div>
            <div>{player?.d}</div>
          </div>
        </div>
        {/* winrate matches  */}
        <div className="box">
          <div className="main_stats">
            <h2 className="title">Winrate</h2>
            <p
              style={{
                color:
                  player?.wr > 55
                    ? 'rgb(19, 201, 19)'
                    : player?.wr >= 50 && player?.wr <= 55
                      ? 'rgb(156, 167, 61)'
                      : 'rgb(240, 27, 45)',
              }}
            >
              {player?.wr}
            </p>
          </div>
          <div className="stats">
            <div>Matches</div>
            <div>{player?.m}</div>
          </div>
          <div className="stats">
            <div>Wins</div>
            <div>{player?.w}</div>
          </div>
          <div className="stats">
            <div>Losses</div>
            <div>{player?.l}</div>
          </div>
        </div>
        {/* elo */}
        <div className="box">
          <div className="main_stats">
            <h2 className="title">Elo</h2>
            <p>{player?.current_elo}</p>
          </div>
          <div className="stats">
            <div>Highest elo</div>
            <div>{player?.highest_elo}</div>
          </div>
          <div className="stats">
            <div>Lowest elo</div>
            <div>{player?.lowest_elo}</div>
          </div>
          <div className="stats">
            <div>Avg.elo</div>
            <div>{player?.avg_elo}</div>
          </div>
        </div>
      </div>
      <ProgressBar player={player} faceitStats={faceitStats} />
    </>
  )
}
