import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export const Scoreboard = ({ matchRoomPlayer, matchRoom, teamNum }) => {
  return (
    <div className="scoreboard">
      <div className="scoreboard_header">
        <div className="scoreboard_team">
          <Avatar style={{ width: '40px', height: '40px' }}>
            <AvatarImage
              src={matchRoomPlayer.teams[`faction${teamNum + 1}`].avatar}
              alt="avatar"
            />
            <AvatarFallback>
              {matchRoomPlayer.teams[`faction${teamNum + 1}`].name}
            </AvatarFallback>
          </Avatar>
          <div className="scoreboard_team_name">
            {matchRoomPlayer.teams[`faction${teamNum + 1}`].name}
          </div>
        </div>
        <div className="half_score">
          <div>
            First Half Score:{' '}
            <div className="half_score_num">
              {
                matchRoom?.rounds[0].teams[teamNum].team_stats[
                  'First Half Score'
                ]
              }
            </div>
          </div>
          <div>
            Second Half Score:{' '}
            <div className="half_score_num">
              {
                matchRoom?.rounds[0].teams[teamNum].team_stats[
                  'Second Half Score'
                ]
              }
            </div>
          </div>
          <div>
            Final Score:{' '}
            <div className="half_score_num">
              {matchRoom?.rounds[0].teams[teamNum].team_stats['Final Score']}
            </div>
          </div>
        </div>
      </div>
      <Table className="table">
        <TableHeader>
          <TableRow className="hover:bg-muted/0">
            <TableHead>Player</TableHead>
            <TableHead>Kills</TableHead>
            <TableHead>Assists</TableHead>
            <TableHead>Deaths</TableHead>
            <TableHead>K/R</TableHead>
            <TableHead>K/D</TableHead>
            <TableHead>Headshot %</TableHead>
            <TableHead>MVPs</TableHead>
            <TableHead>Triple</TableHead>
            <TableHead>Quadro</TableHead>
            <TableHead>Penta</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matchRoom?.rounds[0].teams[teamNum].players.map((player) => (
            <TableRow key={player.player_id}>
              <TableCell>{player.nickname}</TableCell>
              <TableCell>{player.player_stats.Kills}</TableCell>
              <TableCell>{player.player_stats.Assists}</TableCell>
              <TableCell>{player.player_stats.Deaths}</TableCell>
              <TableCell>{player.player_stats['K/R Ratio']}</TableCell>
              <TableCell>{player.player_stats['K/D Ratio']}</TableCell>
              <TableCell>{player.player_stats['Headshots %']}</TableCell>
              <TableCell>{player.player_stats.MVPs}</TableCell>
              <TableCell>{player.player_stats['Triple Kills']}</TableCell>
              <TableCell>{player.player_stats['Quadro Kills']}</TableCell>
              <TableCell>{player.player_stats['Penta Kills']}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
