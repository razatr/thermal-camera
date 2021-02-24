import React from 'react'
import { ProgressBar } from 'react-bootstrap'

function getStatus(currentStatus) {
  switch (currentStatus) {
    case 'pending':
      return 'Ожидает выполнения'
    case 'running':
      return 'Выполняется'
    case 'heating':
      return 'Нагревается'
    default:
      return ''
  }
}

function StatusItem({ time, temperature, num, currentStatus }) {
  const isRunning = currentStatus ? currentStatus.isRunning : 'pending'
  const currentTime = currentStatus ? currentStatus.currentTime : 0
  return (
    <div className="status-item">
      <div>{`Стадия номер ${num + 1}`}</div>
      <div>{`Время для выполнения: ${time} мин`}</div>
      <div>{`Требуемая температура: ${temperature / 100} ℃`}</div>
      <div>{getStatus(isRunning)}</div>
      <div>
        <ProgressBar animated now={(100 * currentTime) / time} />
      </div>
    </div>
  )
}

export default StatusItem
