import React from "react";
import { useQuery } from "react-query";

const Planets =()=>{
  const fetchPlanets = async ()=>{
    const res = await fetch('https://swapi.dev/api/planets/')
    return res.json()
  }
  const {data, isLoading, error, status} = useQuery('planets', fetchPlanets)
  console.log(data);
  console.log(isLoading);
  console.log(error);
  console.log(status);

return (
  <div>
    <h2>planets</h2>
  </div>
)
}

export default Planets