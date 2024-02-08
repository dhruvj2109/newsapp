import styles from './News.module.scss'
import HotTopic from '../../components/organisms/hot-topic/HotTopic'
import WeatherWidget from '../../components/organisms/weather-widget/WeatherWidget'
import LatestNews from '../../components/organisms/latest-news/LatestNews'

const News = () => {
  return (
      <div className={styles['cont']}>
          <div className={styles['combo']}>
              <div className={styles['hot-topics']}>
                  
              <HotTopic />
              </div>
              <div className={styles['weather']}>
                  
              <WeatherWidget />
              </div>
          </div>
          <LatestNews />

    </div>
  )
}

export default News