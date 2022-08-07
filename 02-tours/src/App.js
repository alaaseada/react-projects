import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
import Error from './Error'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [tours, setTours] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)

  const fetchData = async () => {
    try {
      const fetchedData = await fetch(url)
      const data = await fetchedData.json()
      if (data) {
        setTours(data)
        setIsLoading(false)
      } else {
        console.log('No tours available')
      }
    } catch (err) {
      setIsLoading(false)
      setIsError(true)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (isLoading) {
    return <Loading />
  }
  if (isError) {
    return <Error />
  }
  return (
    <>
      <Tours tours={tours} />
    </>
  )
}

export default App
