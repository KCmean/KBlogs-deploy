import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

export const metadata = {
  title: "contact page",
  description: "contact page description",
};


const Contact = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
          Lets keep in touch
      </h1>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image
          src="/contact.png"
          alt='contact'
          fill={true}
          className={styles.image}
        />
      </div>
      <form action="" className={styles.form}>
        <input type="text" placeholder='name' className={styles.input} />
        <input type="emiail" placeholder='email' className={styles.input} />
        <textarea  className={styles.textArea} placeholder="messgae" cols="30" rows="10"></textarea>
        <Button url="#" text="send" />
      </form>
      </div>
    </div>
  )
}

export default Contact