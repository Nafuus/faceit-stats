import de_ancient from '../assets/mapIcon/de_ancient.webp'
import de_anubis from '../assets/mapIcon/de_anubis.webp'
import de_inferno from '../assets/mapIcon/de_inferno.webp'
import de_mirage from '../assets/mapIcon/de_mirage.webp'
import de_nuke from '../assets/mapIcon/de_nuke.webp'
import de_overpass from '../assets/mapIcon/de_overpass.webp'
import de_vertigo from '../assets/mapIcon/de_vertigo.webp'
import cs2Icon from '../assets/mapIcon/cs2Icon.webp'

const mapIcons = {
  de_ancient,
  de_anubis,
  de_inferno,
  de_mirage,
  de_nuke,
  de_overpass,
  de_vertigo,
}

export default function MapIconFilter({ map }) {
  const icon = mapIcons[map]

  if (icon) {
    return <img src={icon} alt={map} className="mapIcon" />
  }

  return (
    <img
      src={cs2Icon}
      alt="cs2"
      className="mapIcon"
      style={{ borderRadius: '50%' }}
    />
  )
}
