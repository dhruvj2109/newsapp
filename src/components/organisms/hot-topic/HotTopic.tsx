import React from 'react'
import styles from './HotTopic.module.scss'
// import athlete from '../../../assets/Rectangle 1.png'
import athlete from '../../../assets/Rectangle 1.svg'
import axios from 'axios'


const HotTopic = () => {
 

  return (
      <div className={styles['topic-cont']}>
          <div className={styles['heading']}><p>Hot Topic</p></div>
          <div className={styles['topic_image']}>
              <img src={athlete } />
          </div>
    </div>
  )
}

export default HotTopic