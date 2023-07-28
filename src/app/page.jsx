import styles from './page.module.css'
import Image from 'next/image'
import Hero from 'public/hero.png'
// import Button from '../../components/button/Button'
import Button from "@/components/button/Button"

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>
          Better design for your digital products
        </h1>
        <p className={styles.desc}>
          Turning your Idea into Reality. We bring together the teams from the
          global tech industry.
        </p>
        <Button text="See My Work" url="/portfolio" />
      </div>
      <div className={styles.imgContainer}>
      <Image src={Hero} alt='hero' className={styles.img} />
      </div>
    </div>
  )
}
