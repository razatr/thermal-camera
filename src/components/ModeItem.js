import React from 'react'
import { Button } from 'react-bootstrap'

function ModeItem({ num, info, setInSetup }) {
  return (
    <>
      <div>{`Программа номер ${num + 1}`}</div>
      <Button
        onClick={() => {
          setInSetup(info)
        }}
      >
        Настроить
      </Button>
    </>
  )
}

export default ModeItem
