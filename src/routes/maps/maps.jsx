import { useState } from 'react'
import { useSelector } from 'react-redux'

import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

import { SortableTableHead } from './components/SortableTableHead'
import { MapTableRow } from './components/MapTableRow'
import './maps.css'

export const Maps = () => {
  const mapsData = useSelector((state) => state.faceitData.maps)
  const [sortBy, setSortBy] = useState(null)
  const [sortOrder, setSortOrder] = useState('asc')

  const handleSort = (sortByField) => {
    if (sortBy === sortByField) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')
    } else {
      setSortBy(sortByField)
      setSortOrder('asc')
    }
  }

  const sortData = (data) => {
    if (!sortBy) return data

    const sortedData = [...data]
    sortedData.sort((a, b) => {
      const valueA = a[sortBy]
      const valueB = b[sortBy]

      if (valueA < valueB) return sortOrder === 'asc' ? -1 : 1
      if (valueA > valueB) return sortOrder === 'asc' ? 1 : -1

      if (sortBy === 'wr' || sortBy === 'avg_kdr' || sortBy === 'hsp') {
        return sortOrder === 'asc'
          ? a[sortBy] - b[sortBy]
          : b[sortBy] - a[sortBy]
      }
      return 0
    })
    return sortedData
  }

  const renderSortIndicator = (param) => {
    if (sortBy === param) {
      return sortOrder === 'asc' ? '↓' : '↑'
    } else {
      return ''
    }
  }

  return (
    <div className="matches">
      <Table className="table">
        <TableHeader>
          <TableRow className="TableRow hover:bg-muted/0">
            <TableHead>Map</TableHead>
            <TableHead>Name</TableHead>
            <SortableTableHead
              field="m"
              label="Matches"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <SortableTableHead
              field="w"
              label="Won"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <SortableTableHead
              field="l"
              label="Lost"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <SortableTableHead
              field="wr"
              label="Winrate"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <TableHead>Avg.K</TableHead>
            <TableHead>Avg.D</TableHead>
            <SortableTableHead
              field="hsp"
              label="HS%"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <TableHead>KR</TableHead>
            <SortableTableHead
              field="avg_kdr"
              label="KD"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
            />
            <SortableTableHead
              field="avg_hltv"
              label="HLTV"
              onClick={handleSort}
              renderSortIndicator={renderSortIndicator}
              isLast={true}
            />
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortData(mapsData?.segments || []).map((map, index) => (
            <MapTableRow key={index} map={map} />
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
