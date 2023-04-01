import { ChangeEvent, useState } from 'react'
import Window from '../components/Window'
import s from '../components/Counter.module.css'
import SuperButton from '../components/SuperButton'
import Settings from '../components/Settings'
import { useSelector } from 'react-redux'
import { setCurrentValueAC, setMaxValueAC, setMinValueAC, StateType } from '../store/counter_reducer'
import { useDispatch } from 'react-redux'
import { RootStateType } from '../store/store'


const CounterWithRedux = () => {

    const state = useSelector<RootStateType, StateType>(state => state)
    const dispatch = useDispatch()

    const [editMode, setEditMode] = useState(false)

    const error = state.minValue < 0 || state.maxValue < 0 || state.maxValue <= state.minValue ? true : false;

    const incHandler = () => state.currentValue < state.maxValue && dispatch(setCurrentValueAC(state.currentValue + 1))
    const resetHandler = () => dispatch(setCurrentValueAC(state.minValue))
  
    const setValue = () => {
        dispatch(setCurrentValueAC(state.minValue))
        setEditMode(false)
    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        const maxValue = +e.currentTarget.value
        0 <= maxValue && state.minValue <= state.maxValue && dispatch(setMaxValueAC(maxValue))
        if (!editMode) setEditMode(true)
    }

    const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        const minValue = +e.currentTarget.value
        0 <= minValue && minValue <= state.maxValue && dispatch(setMinValueAC(minValue))
        if (!editMode) setEditMode(true)
    }
    
    // useEffect(()=>{
    //     const counter = localStorage.getItem('counterValue2')
    //     const minValue = localStorage.getItem('startValue2')
    //     const maxValue = localStorage.getItem('maxValue2')

    //     if (counter) {
    //     setCount(JSON.parse(counter))
    //     }
    //     if (minValue) {
    //     setMinValue(JSON.parse(minValue))   
    //     }
    //     if (maxValue) {
    //     setMaxValue(JSON.parse(maxValue))   
    //     }
    // }, [])


    // useEffect(() => {
    //     localStorage.setItem('counterValue2', JSON.stringify(count))
    //     localStorage.setItem('startValue2', JSON.stringify(minValue))
    //     localStorage.setItem('maxValue2', JSON.stringify(maxValue))    
    // }, [count, minValue, maxValue])

  return (
        <div className={'wrapper'}>

            {editMode ? 
                    <Settings minValue={state.minValue} 
                              maxValue={state.maxValue} 
                              handleMinValue={handleMinValue} 
                              handleMaxValue={handleMaxValue} 
                              setValue={setValue}
                              disabled={error}
                              errorForMin={state.minValue < 0 || state.maxValue <= state.minValue}
                              errorForMax={state.maxValue < 0 || state.maxValue <= state.minValue}
                                />
                :
                <div className = {s.counter}>

                    <Window count = {state.currentValue} maxValue = {state.maxValue}/>

                    <div className={s.btnBlock}>
                        <SuperButton callBack = {incHandler}
                                     disabled = {state.currentValue === state.maxValue}>
                                     increment
                        </SuperButton>

                        <SuperButton callBack = {resetHandler}
                                     disabled = {state.currentValue === state.minValue}>
                                     reset
                        </SuperButton>

                        <SuperButton callBack = {() => setEditMode(true)}>
                                     set
                        </SuperButton>
                    </div>  
                </div>
            }
        </div>
  )
}


export default CounterWithRedux