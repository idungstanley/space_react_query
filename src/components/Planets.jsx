import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Planet from './Planet'

const Planets = () => {
  const [page, setPage] = useState(1)
  const fetchPlanets = async (page) => {
    const res = await fetch(`https://swapi.dev/api/planets/?page=${page}`)
    return res.json()
  }
  const { data, status } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => fetchPlanets(page),
    keepPreviousData: true,
  })

  return (
    <div>
      <h2>planets</h2>
      {status === 'loading' ? <p>is Loading. . .</p> : ''}
      {status === 'error' && <div>Error Fetching Data</div>}
      {status === 'success' && (
        <>
          <button
            onClick={() => setPage((old) => Math.max(old - 1, 1))}
            disabled={page === 1}
          >
            Previous page
          </button>
          <span>{page}</span>
          <button
            onClick={() => setPage((old) => (!data.next ? old : old + 1))}
            disabled={!data.next}
          >
            Next page
          </button>
          <div>
            {data.results.map((planet) => (
              <Planet key={planet.name} planet={planet} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default Planets
