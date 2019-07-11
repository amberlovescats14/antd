import React from 'react'
import { Calendar } from 'antd'

const onPanelChange = (value, mode) => {
  console.log(value)
}
const Calen = () => {
  return (
    <div>
      <Calendar 
      fullscreen={false}
      onPanelChange={onPanelChange()}/>
    </div>
  )
}

export default Calen
