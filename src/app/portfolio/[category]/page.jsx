// "use client"

import React from 'react'
import styles from './page.module.css'
import Button from '@/components/button/Button'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { items } from './data.js'

const getData = (cat) => {
 const data  = items[cat] 
//  console.log(data)

  if(data) {
    return data
  }else{
  return notFound();
  }
}
 
const Category = ({ params }) => {

  console.log(params)
  const data = getData(params.category) 
  // console.log(...data)
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>
        {params.category}
      </h1>

      {data.map(item => 
      (
      <div className={styles.item} key = {item.id}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            {item.title} 
          </h1>
          <p className={styles.desc}>
            {item.desc}
          </p>
          <Button text="See More" url="#" />
        </div>
        <div className={styles.imgContainer}>
            <Image fill={true} src={item.image} alt='bg-img' className={styles.img}/>
        </div>
      </div>
    ))}
    </div>
  )
}

export default Category