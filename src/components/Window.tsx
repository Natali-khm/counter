import React from 'react'
import s from './Window.module.css'

type PropsType = {
  count: number
  maxValue: number
  error: boolean
  editMode: boolean
}

const Window: React.FC<PropsType> = ({count, maxValue, error, editMode}) => {
  
  return (
    <div className={s.window + (error ? ' ' + s.windowError : '')}>

      {!editMode 
      ? <span className={ s.counterDefault + (count === maxValue ? ' ' + s.counterRed : '') }>{count}</span>
      : error 
      ? <span className={s.error}>Incorrect value!</span>  
      : <span className={s.message}>set values and press 'set'</span> 
      }
    </div>
  )
}

export default Window