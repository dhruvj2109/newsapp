import styles from './HotTopic.module.scss'
// import athlete from '../../../assets/Rectangle 1.png'
import athlete from '../../../assets/Rectangle 1.svg'
import { useMediaQuery } from '../../../useMediaQuery/useMediaQuery';
// import heading from '../../../assets/News Title Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet.svg'


const HotTopic = () => {
    const isBreakPoint = useMediaQuery("(max-width: 390px)");

  return (
      <div className={styles['topic-cont']}>
          <div className={styles['heading']}><p>Hot Topic</p></div>
          <div className={styles['topic_image']}>
              <img src={athlete } alt='athlete'/>
          </div>
          <div className={styles['head-image']}>
              {isBreakPoint ? <p className={styles['title']}>News Title Lorem Ipsum Dolor Sit Amet  Lorem Ipsum Dolor Sit ...</p> : 
              <p className={styles['title']}>News Title Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet Lorem Ipsum Dolor Sit Amet</p>
              }
              <p className={styles['time']}>2 Hours Ago</p>
          </div>
    </div>
  )
}

export default HotTopic