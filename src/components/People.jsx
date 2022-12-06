import React, { useState } from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const People = () => {
  const [page, setPage] = useState(1)
  const fetchPeople = async (page) => {
    const res = await fetch(`https://swapi.dev/api/people/?page=${page}`)
    return res.json()
  }
  const { data, status, isLoading } = useQuery({
    queryKey: ['projects', page],
    queryFn: () => fetchPeople(page),
    keepPreviousData: true,
  })
  console.log(data)
  return (
    <div>
      <h2>people</h2>
      {isLoading && <div>is Loading, please wait . . .</div>}
      {status === 'error' && <div>Error encountered while fetching data</div>}
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
            {data.results.map((person) => (
              <Person key={person.name} person={person} />
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default People
