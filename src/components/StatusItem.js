import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function StatusItem({ time, temperature }) {
  return (
    <div className="status-item">
      <div>{`Время для выполнения: ${time} мин`}</div>
      <div>{`Требуемая температура: ${temperature / 100} ℃`}</div>
      <div>
        <ProgressBar animated now={10} />
      </div>
    </div>
  )
}

export default StatusItem
