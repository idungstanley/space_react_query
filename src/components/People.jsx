import React from 'react'
import { useQuery } from 'react-query'
import Person from './Person'

const People = () => {
  const fetchPeople = async ()=>{
    const res = await fetch('https://swapi.dev/api/people/')
    return res.json()
  }
  const {data, status, isLoading} = useQuery('people', fetchPeople)
  console.log(data);
  return (
    <div>
      <h2>people</h2>
      {isLoading && (<div>is Loading, please wait . . .</div>)}
      {status === 'error' && (<div>Error encountered while fetching data</div>)}
      {status === 'success' && (<div>
        {data.results.map(person => <Person key={person.name} person={person}/>)}
      </div>)}
    </div>
  )
}

export default People
