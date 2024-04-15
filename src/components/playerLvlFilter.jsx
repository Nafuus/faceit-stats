export const PlayerLvlFilter = ({ lvl, className }) => {
  if (lvl) {
    return (
      <img src={`/assets/lvl/${lvl}.png`} alt={lvl} className={className} />
    )
  }

  return <div>?</div>
}
