const mapIcons = [
  'de_ancient',
  'de_anubis',
  'de_inferno',
  'de_mirage',
  'de_nuke',
  'de_overpass',
  'de_vertigo',
]

export const MapIconFilter = ({ icon }) => {
  if (icon && mapIcons.includes(icon)) {
    return (
      <img
        src={`/assets/mapIcon/${icon}.webp`}
        alt={icon}
        className="mapIcon"
      />
    )
  }

  return (
    <img
      src="/assets/mapIcon/cs2Icon.webp"
      alt="cs2"
      className="mapIcon"
      style={{ borderRadius: '50%' }}
    />
  )
}
