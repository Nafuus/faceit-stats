export const MapIconFilter = ({ icon }) => {
  if (icon) {
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

// не показывается cs2Icon
