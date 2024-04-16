import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const MatchResult = ({ matchRoomPlayer, matchRoom }) => {
  const [firstScore, secondScore] =
    matchRoom?.rounds[0].round_stats.Score.split(' / ').map(Number)

  return (
    <div className="match_result">
      <div className="match_team">
        <div className="match_team_name">
          {matchRoomPlayer.teams.faction1.name}
        </div>
        <Avatar style={{ width: '50px', height: '50px' }}>
          <AvatarImage
            src={matchRoomPlayer.teams.faction1.avatar}
            alt="avatar"
          />
          <AvatarFallback>{matchRoomPlayer.teams.faction1.name}</AvatarFallback>
        </Avatar>
        <div
          className={`match_value ${firstScore > secondScore ? 'team_won' : 'team_lost'}`}
        >
          {firstScore}
        </div>
      </div>
      <div className="match_vs">
        <div className="game_mode">{`${matchRoom?.rounds[0].game_mode} · ${matchRoomPlayer?.region}`}</div>
        <div className="matchRoom_status">{matchRoomPlayer?.status}</div>
        <div>best of {matchRoomPlayer?.best_of}</div>
        <a
          className="match_link"
          href={matchRoomPlayer?.faceit_url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Link
        </a>
      </div>
      <div className="match_team">
        <div
          className={`match_value ${secondScore > firstScore ? 'team_won' : 'team_lost'}`}
        >
          {secondScore}
        </div>
        <Avatar style={{ width: '50px', height: '50px' }}>
          <AvatarImage
            src={matchRoomPlayer.teams.faction2.avatar}
            alt="avatar"
          />
          <AvatarFallback>{matchRoomPlayer.teams.faction2.name}</AvatarFallback>
        </Avatar>
        <div className="match_team_name">
          {matchRoomPlayer.teams.faction2.name}
        </div>
      </div>
    </div>
  )
}
