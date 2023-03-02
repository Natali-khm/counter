import React, { memo } from 'react'
import s from './SuperButton.module.css'

type PropsType = {
    children?: React.ReactNode
    callBack: () => void
    disabled?: boolean
}

const SuperButton: React.FC<PropsType> = React.memo (({children, callBack, disabled}) => {

  return (
    <button onClick = {callBack}
            className = {s.default + (disabled ? ' ' + s.disabled : '')}
            disabled = {disabled}
            >      
            {children}
    </button>
  )
})

export default SuperButton