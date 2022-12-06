import React from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const Planets = () => {
  const fetchPlanets = async () => {
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json()
  }
  const { data, isLoading, status } = useQuery('planets', fetchPlanets)
  console.log(data)
  console.log(isLoading)
  console.log(status)

  return (
    <div>
      <h2>planets</h2>
      {isLoading ? <p>is Loading. . .</p> : ''}
      {status === 'error' && <div>Error Fetching Data</div>}
      {status === 'success' && (
        <div>
          {data.results.map((planet) => (
            <Planet key={planet.name} planet={planet} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Planets
