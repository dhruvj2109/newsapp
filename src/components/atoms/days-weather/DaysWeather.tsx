import React from 'react'
import style from './DaysWeather.module.scss'
import temp from '../../../assets/Group (1).svg'

const DaysWeather = () => {
  return (
      <div className={style['weather-cont']}>
          <p>Thursday</p>
          <img src={temp} alt='cloud' />
          <p><span>123</span><span>12</span></p>
    </div>
  )
}

export default DaysWeather