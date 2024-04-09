import { useEffect, useState } from 'react'
import {
  useGetMapsQuery,
  useGetMatchesQuery,
  useGetPlayerQuery,
} from '../../api/api'
import Navbar from './navbar/navbar'
import { Button } from '@/components/ui/button'
import searchIcon from '../../assets/searchIcon.svg'
import PlayerChoice from './playerСhoice/playerChoice'
import './search.css'
import { useDispatch } from 'react-redux'
import { getData } from '../../store/faceitDataSlice'
import {
  useGetFaceitStatsQuery,
  useGetMatchRoomQuery,
} from '../../api/faceitApi'

export default function Search() {
  const [playerInput, setPlayerInput] = useState('')
  const [player, setPlayer] = useState('')
  const [skip, setSkip] = useState(true)
  const [errorText, setErrorText] = useState('')
  const [inputWarning, setInputWarning] = useState(false)
  const dispatch = useDispatch()

  const { data, isLoading, isError, error } = useGetPlayerQuery(
    { player },
    { skip: skip },
  )

  const {
    data: matches,
    isLoading: isLoadingMatches,
    isError: isErrorMatches,
    error: errorMatches,
  } = useGetMatchesQuery({ player }, { skip: skip })

  const {
    data: maps,
    isLoading: isLoadingMaps,
    isError: isErrorMaps,
    error: errorMaps,
  } = useGetMapsQuery({ player }, { skip: skip })

  const { data: faceitStats } = useGetFaceitStatsQuery(
    { player },
    { skip: skip },
  )

  // const { data: matchRoom } = useGetMatchRoomQuery({ matchId }, { skip: skip })

  useEffect(() => {
    if (data && matches && maps) {
      dispatch(getData({ data, matches, maps, faceitStats }))
    }
  }, [data, matches, maps, faceitStats])

  useEffect(() => {
    if (!skip && !faceitStats) {
      setErrorText('Player not found. Please enter a valid player name.')
    } else {
      setErrorText('')
    }
  }, [skip, faceitStats])

  const getPlayer = () => {
    if (playerInput === '') {
      setInputWarning(true)
      return
    }
    setPlayer(playerInput)
    setPlayerInput('')
    if (skip) setSkip(false)
    setInputWarning(false)
  }

  const handlePlayerChoiceClick = (selectedPlayer) => {
    setPlayer(selectedPlayer)
    setSkip(false)
  }

  ///
  const consoleLog = () => {
    console.log('faceit stat', faceitStats)
  }

  if (isLoading || isLoadingMatches || isLoadingMaps)
    return <h1 className="loading">Loading...</h1>
  if (isError || isErrorMatches || isErrorMaps)
    return (
      <div>
        <h1>Error:</h1>
        {error.status} {JSON.stringify(error.data)}
        {errorMatches.status} {JSON.stringify(errorMatches.data)}
        {errorMaps.status} {JSON.stringify(errorMaps.data)}
      </div>
    )

  return (
    <div className="search">
      <div>
        <div className="search_wrapper">
          <input
            type="text"
            className="input_search"
            placeholder="Enter player name"
            value={playerInput}
            onChange={(e) => setPlayerInput(e.target.value)}
            onClick={() => setInputWarning(false)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                getPlayer()
              }
            }}
          />
          <Button onClick={getPlayer}>
            <img src={searchIcon} alt="searchIcon" className="searchIcon" />
          </Button>
          <Button onClick={consoleLog()}>console</Button>
        </div>
        <div>
          {errorText && <div className="warning active">{errorText}</div>}
          {inputWarning && (
            <div className="warning active">Please enter a player name.</div>
          )}
        </div>
      </div>
      <PlayerChoice onPlayerChoiceClick={handlePlayerChoiceClick} />
      {!skip && <Navbar />}
    </div>
  )
}
