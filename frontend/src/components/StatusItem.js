import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function getStatus(currentStatus) {
  switch (currentStatus) {
    case 0:
      return 'Ожидает выполнения'
    case 2:
      return 'Выполняется'
    case 1:
      return 'Нагревается'
    case 3:
      return 'Стадия завершена'
    default:
      return ''
  }
}

function StatusItem({ time, temperature, num, currentStatus }) {
  const isRunning = currentStatus[0]
  const currentTime = currentStatus[1]
  return (
    <div className="status-item">
      <div>{`Стадия номер ${num + 1}`}</div>
      <div>{`Время для выполнения: ${time} мин`}</div>
      <div>{`Требуемая температура: ${temperature / 100} ℃`}</div>
      <div>{getStatus(isRunning)}</div>
      <div>
        <ProgressBar
          animated
          now={isRunning === 3 ? 100 : (100 * currentTime) / (60 * time)}
        />
      </div>
    </div>
  )
}

export default StatusItem
