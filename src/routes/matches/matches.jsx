import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { getMatchId } from '@/store/faceitDataSlice'
import { MapIconFilter } from '@/components/mapIconFilter'

import './matches.css'

export const Matches = () => {
  const matches = useSelector((state) => state.faceitData.matches)
  const dispatch = useDispatch()

  return (
    <div className="matches">
      <Table className="table">
        <TableHeader>
          <TableRow className="hover:bg-muted/0">
            <TableHead>W/L</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Team</TableHead>
            <TableHead>Map</TableHead>
            <TableHead>Map name</TableHead>
            <TableHead>Score</TableHead>
            <TableHead>KDA</TableHead>
            <TableHead>HLTV</TableHead>
            <TableHead>Room</TableHead>
            <TableHead className="text-right">Link</TableHead>
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
                <MapIconFilter icon={match?.map} />
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
              <TableCell>{`${match?.k} - ${match?.d} - ${match?.a}`}</TableCell>
              <TableCell
                style={{
                  color: `${match?.hltv >= 1 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)'}`,
                  fontWeight: '500',
                }}
              >
                {match?.hltv}
              </TableCell>
              <TableCell
                style={{ width: '0', height: '0', paddingLeft: '27px' }}
              >
                <Link to="/matchRoom">
                  <button onClick={() => dispatch(getMatchId(match?.matchId))}>
                    <img
                      src="/assets/matchRoomIcon.svg"
                      alt="matchRoom"
                      className="matches_linkIcon"
                    />
                  </button>
                </Link>
              </TableCell>
              <TableCell
                className="text-right"
                style={{ width: '0', height: '0', paddingLeft: '22px' }}
              >
                <a href={match?.url} target="_blank" rel="noopener noreferrer">
                  <img
                    src="/assets/matchLinkIcon.svg"
                    alt="link"
                    className="matches_linkIcon"
                  />
                </a>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
