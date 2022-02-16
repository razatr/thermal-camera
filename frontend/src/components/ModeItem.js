import React from 'react'
import { Button } from 'react-bootstrap'

function ModeItem({ num, info, setInSetup }) {
  console.log(setInSetup)
  return (
    <>
      <div>{`Программа номер ${num + 1}`}</div>
      <Button
        onClick={() => {
          setInSetup({ num, mode: info })
        }}
      >
        Настроить
      </Button>
    </>
  )
}

export default ModeItem
