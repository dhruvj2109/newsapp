import React from 'react'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={styles['footer-cont']}>
          <div className={styles['footer']}><p>Copyright 2021 News Portal</p></div>
    </div>
  )
}

export default Footer