import React, { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'

function Temperature() {
  const [temperature, setTemperature] = useState(0)
  const [loading, setLoadingState] = useState(false)
  const [error, setErrorState] = useState(false)

  useEffect(() => {
    setLoadingState(true)
    fetch('http://192.168.4.1/?temp')
      .then((res) => res.json())
      .then(
        (result) => {
          setTemperature(result)
          setLoadingState(false)
        },
        (resError) => {
          setLoadingState(false)
          setErrorState(resError)
        }
      )
  }, [])

  if (loading) {
    return (
      <div>
        <Spinner animation="grow" />
      </div>
    )
  }

  if (error) {
    console.error(error)
    return <div>Не удалось загрузить температуру</div>
  }

  return <div>{temperature}</div>
}

export default Temperature
