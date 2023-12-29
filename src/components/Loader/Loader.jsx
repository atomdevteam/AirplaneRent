import React from 'react'
import styles from './Loader.module.css'

function Loader() {
  return (
    <div>
      <div className={styles.fondo}>
        <div className={styles.wings}></div>
        <div className={styles.circle}></div>
        <div className={styles.arc}></div>
        <div className={styles.arc2}></div>
      </div>
    </div>

  )
}

export default Loader