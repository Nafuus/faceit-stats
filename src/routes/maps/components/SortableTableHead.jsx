import { TableHead } from '@/components/ui/table'

export const SortableTableHead = ({
  field,
  label,
  onClick,
  renderSortIndicator,
  isLast,
}) => (
  <TableHead
    onClick={() => onClick(field)}
    className={`table_filter ${isLast ? 'text-right' : ''}`}
  >
    {label} {renderSortIndicator(field)}
  </TableHead>
)
