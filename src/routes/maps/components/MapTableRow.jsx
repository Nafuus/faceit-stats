import { TableCell, TableRow } from '@/components/ui/table'
import { MapIconFilter } from '@/components/mapIconFilter'

export const MapTableRow = ({ map }) => (
  <TableRow>
    <TableCell>
      <MapIconFilter icon={map?.map} />
    </TableCell>
    <TableCell className="font-medium">{map?.map}</TableCell>
    <TableCell>{map?.m}</TableCell>
    <TableCell>{map?.w}</TableCell>
    <TableCell>{map?.l}</TableCell>
    <TableCell
      style={{
        color: map?.wr >= 50 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)',
        fontWeight: '500',
      }}
    >
      {map?.wr}
    </TableCell>
    <TableCell>{map?.avg_k}</TableCell>
    <TableCell>{map?.avg_d}</TableCell>
    <TableCell>{map?.hsp}</TableCell>
    <TableCell>{map?.avg_krr}</TableCell>
    <TableCell
      style={{
        color: map?.avg_kdr >= 1 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)',
        fontWeight: '500',
      }}
    >
      {map?.avg_kdr}
    </TableCell>
    <TableCell
      className="text-right"
      style={{
        color: map?.avg_kdr >= 1 ? 'rgb(19, 201, 19)' : 'rgb(240, 27, 45)',
        fontWeight: '500',
      }}
    >
      {map?.avg_hltv}
    </TableCell>
  </TableRow>
)
