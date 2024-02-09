import style from './DaysWeather.module.scss'
import temp from '../../../assets/Group (1).svg'

const DaysWeather = () => {
    return (
      <div className={style['cont']}>
            
      <div className={style['weather-sub-cont']}>
          <p className={style['dayes']}>Wed</p>
          <img src={temp} alt='cloud' />
                  <p className={style['temp']}><span className={style['first']}>12</span><span className={style['second']}>12</span></p>

            </div>
            <div className={style['weather-sub-cont']}>
          <p className={style['dayes']}>Wed</p>
          <img src={temp} alt='cloud' />
          <p className={style['temp']}><span className={style['first']}>13</span><span className={style['second']}>12</span></p>
            </div>
            <div className={style['weather-sub-cont']}>
          <p className={style['dayes']}>Fri</p>
          <img src={temp} alt='cloud' />
          <p className={style['temp']}><span className={style['first']}>23</span><span className={style['second']}>12</span></p>
            </div>
            <div className={style['weather-sub-cont']}>
          <p className={style['dayes']}>Sat</p>
          <img src={temp} alt='cloud' />
          <p className={style['temp']}><span className={style['first']}>13</span><span className={style['second']}>12</span></p>
            </div>
            <div className={style['weather-sub-cont']}>
          <p className={style['dayes']}>Thurs</p>
          <img src={temp} alt='cloud' />
          <p className={style['temp']}><span className={style['first']}>14</span><span className={style['second']}>12</span></p>
            </div>
           
      </div>
  )
}

export default DaysWeather