import { ChangeEvent } from "react"
import s from './Settings.module.css'
import SuperButton from "./SuperButton"
import SuperInput from "./SuperInput"
import sCounter from './Counter.module.css'


type PropsType={
    minValue: number 
    maxValue: number
    handleMinValue: (e: ChangeEvent<HTMLInputElement>)=>void
    handleMaxValue: (e: ChangeEvent<HTMLInputElement>)=>void
    setValue: ()=>void
    disabled: boolean
    errorForMin: boolean
    errorForMax: boolean
}


const Settings = (props: PropsType) => {

  return (
    <div className = {sCounter.counter}>
      <div className={s.window}>

        <div className={s.inputBlock}>
          <span>max value </span>
          <SuperInput value={props.maxValue}
                      onChange={props.handleMaxValue}
                      className={props.errorForMax ? s.errorInput : ''}
                />
        </div>

        <div className={s.inputBlock}>
          <span>start value </span>
          <SuperInput value={props.minValue}
                      onChange={props.handleMinValue}
                      className={props.errorForMin ? s.errorInput : ''}
              />
        </div>
        
      </div>

        <div className={sCounter.btnBlock}>
          <SuperButton callBack={props.setValue} 
                       disabled={props.disabled}>
                       set
          </SuperButton>
        </div>
    </div>
  )
}

export default Settings