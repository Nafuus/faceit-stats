import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { useSelector } from 'react-redux'
import MapIconFilter from '../../components/mapIconFilter'
import './matches.css'

export default function Matches() {
  const matches = useSelector((state) => state.faceitData.matches)

  return (
    <div className="matches">
      <Table className="table">
        <TableHeader>
          <TableRow>
            <TableHead>W/L</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Map</TableHead>
            <TableHead>Map name</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>KDA</TableHead>
            <TableHead>HLTV</TableHead>
            <TableHead className="text-right">Match</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {matches?.segments.map((match) => (
            <TableRow key={match?._id.matchId}>
              <TableCell>
                <div
                  className={`match_status ${match?.i10 == 1 ? 'match_won' : 'match_lost'}`}
                ></div>
              </TableCell>
              <TableCell className="font-medium">{match?.date}</TableCell>
              <TableCell>{match?.i5}</TableCell>
              <TableCell>
                <MapIconFilter map={match?.map} />
              </TableCell>
              <TableCell>{match?.map}</TableCell>
              <TableCell
                style={{
                  color: `${match?.i10 == 1 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)'}`,
                  fontWeight: '500',
                }}
              >
                {match?.i18}
              </TableCell>
              <TableCell>
                {match?.k + ' - ' + match?.d + ' - ' + match?.a}
              </TableCell>
              <TableCell
                style={{
                  color: `${match?.hltv >= 1 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)'}`,
                  fontWeight: '500',
                }}
              >
                {match?.hltv}
              </TableCell>
              <TableCell className="text-right">
                <a href={match?.url} target="_blank" rel="noopener noreferrer">
                  room
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
