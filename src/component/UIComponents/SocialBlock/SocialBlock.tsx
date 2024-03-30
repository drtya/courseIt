import React from 'react'
import x from '@/../public/image/x.svg'
import telegram from '@/../public/image/telegram.svg'
import whatsapp from '@/../public/image/whatsapp.svg'
import styles from './Style.module.scss'
import Image from 'next/image'

const SocialBlock = () => {
  return (
    <div className={styles.social}>
      <a href="https://twitter.com/" target='_blank'><Image src={x} className={styles.social_img} alt="x" /></a>
      <a href="https://t.me/daniyar" target='_blank'><Image src={telegram} className={styles.social_img} alt="telegram" /></a>
      <a href="https://wa.me/996777777777" target='_blank'><Image src={whatsapp} className={styles.social_img} alt="whatsapp" /></a>
    </div>
  )
}

export default SocialBlock