"use client"

import React from 'react'
import styles from './page.module.css'
import { signIn } from 'next-auth/react'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'



const Login = () => {

  const session = useSession();
  const router = useRouter()

  
  if (session.status === "loading") {
    return <p>Loading...</p> //skelton loader
  }
  if (session.status === "unauthenticated") {
    router.push("/dashboard/login")
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const email = e.target[0].value
    const password = e.target[1].value
  
    // try{
    //   const res = await fetch('/api/auth/register',{
    //     method: 'POST',
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({name,email,password})
    //   })
  
    //   res.status === 200 ? router.push('/dashboard/login?success=created') : setErr(true)
    // }catch(err){
    //   setErr(true)
    // }
  
    signIn("credentials" , {email,password})
  }

  
  
  return (
    // <div className={styles.container}>
    //   <form action="" className={styles.form} onSubmit={handleSubmit}>
    //     <input type='email' placeholder='email' className={styles.input} required />
    //     <input type='password' placeholder='password' className={styles.input} required />


    //     <button className={styles.button}>
    //       Login
    //     </button>
    //   </form>
    //   <button onClick={() => signIn("google")}>
    //     Login with Google
    //   </button>
    // </div>
    <div className={styles.container}>
    {/* <h1 className={styles.title}>{success ? success : "Welcome Back"}</h1> */}
    <h2 className={styles.subtitle}>Please sign in to see the dashboard.</h2>

    <form onSubmit={handleSubmit} className={styles.form}>
      <input
        type="text"
        placeholder="Email"
        required
        className={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        required
        className={styles.input}
      />
      <button className={styles.button}>Login</button>
      {/* {error && error} */}
    </form>
    <button
      onClick={() => {
        signIn("google");
      }}
      className={styles.button + " " + styles.google}
    >
      Login with Google
    </button>
    <span className={styles.or}>- OR -</span>
    <Link className={styles.link} href="/dashboard/register">
      Create new account
    </Link>
    {/* <button
      onClick={() => {
        signIn("github");
      }}
      className={styles.button + " " + styles.github}
    >
      Login with Github
    </button> */}
  </div>
  )
}

export default Login