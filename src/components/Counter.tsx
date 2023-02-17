import SuperButton from "./SuperButton"
import Window from "./Window"
import s from './Counter.module.css'

type CounterPropsType = {
    count: number
    maxValue: number
    error: boolean
    incHandler: ()=>void
    disabledIncrement: boolean
    disabledReset: boolean
    resetHandler: ()=>void
    editMode: boolean
}

const Counter = (props: CounterPropsType) => {

  const {count, maxValue, error, incHandler, resetHandler, disabledIncrement, disabledReset, editMode} = props;

  return (
  <div className={s.counter}>
        <Window count = {count}
                maxValue = {maxValue}
                error={error}
                editMode={editMode}
                />

        <div className={s.btnBlock}>
            <SuperButton callBack = {incHandler}
                         disabled = {disabledIncrement}>
                         increment
            </SuperButton>

            <SuperButton callBack = {resetHandler}
                         disabled = {disabledReset}>
                         reset
            </SuperButton>
        </div>      
    </div>
  )
}

export default Counter