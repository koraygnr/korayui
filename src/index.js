import React from 'react'
import styles from './styles.module.css'


export const Button = ( props ) => {
  
  const { type, children } = props

  return (
    <button 
    type={props.type}
    className={styles[type]}
    >{children}
    </button>
  )
}


