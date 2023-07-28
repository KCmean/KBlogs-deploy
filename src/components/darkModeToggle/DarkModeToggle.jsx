"use client"

import React from 'react'
import styles from './DarkModeToggle.module.css'
import { ThemeContext } from '@/context/ThemeContext'
import { useContext } from 'react'
// import { useState } from 'react'



const DarkModeToggle = () => {

// const [mode, setMode] = useState("light")

    // const mode = "dark"
    const { toggleMode,mode } = useContext(ThemeContext)
    return (
        <div className={styles.container} onClick={toggleMode}>
            <div className={styles.icon}>
                🌙
            </div>
            <div className={styles.icon}>
                ☀️
            </div>
            <div
                className={styles.ball}
                style={mode === "light" ? { left: "2px" } : { right: "2px" }}
                // style={{backgroundColor: "red"}}

            />
        </div>
    )
}

export default DarkModeToggle