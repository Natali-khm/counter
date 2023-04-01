import React, { ChangeEvent, useEffect, useState } from 'react'
import Window from '../components/Window'
import s from '../components/Counter.module.css'
import SuperButton from '../components/SuperButton'
import Settings from '../components/Settings'


const CounterWithCombinedSettings = () => {
    const [count, setCount] = useState(0)
    const [minValue, setMinValue] = useState<number>(0)  
    const [maxValue, setMaxValue] = useState<number>(3)    
    const [editMode, setEditMode] = useState(false)

    const error = minValue < 0 || maxValue < 0 || maxValue <= minValue ? true : false;

    const incHandler = () => count < maxValue && setCount(count + 1)
    const resetHandler = () => setCount(minValue)
  
    const setValue = () => {
        if (0 <= minValue) setCount(minValue);
        setEditMode(false)
    }

    const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMaxValue(Number(e.currentTarget.value))
        if (!editMode) setEditMode(true)
    }

    const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        setMinValue(Number(e.currentTarget.value)) 
        if (!editMode) setEditMode(true)
    }
    
    useEffect(()=>{
        const counter = localStorage.getItem('counterValue2')
        const minValue = localStorage.getItem('startValue2')
        const maxValue = localStorage.getItem('maxValue2')

        if (counter) {
        setCount(JSON.parse(counter))
        }
        if (minValue) {
        setMinValue(JSON.parse(minValue))   
        }
        if (maxValue) {
        setMaxValue(JSON.parse(maxValue))   
        }
    }, [])


    useEffect(() => {
        localStorage.setItem('counterValue2', JSON.stringify(count))
        localStorage.setItem('startValue2', JSON.stringify(minValue))
        localStorage.setItem('maxValue2', JSON.stringify(maxValue))    
    }, [count, minValue, maxValue])

  return (
        <div className={'wrapper'}>

            {editMode ? 
                    <Settings minValue={minValue} 
                              maxValue={maxValue} 
                              handleMinValue={handleMinValue} 
                              handleMaxValue={handleMaxValue} 
                              setValue={setValue}
                              disabled={error}
                              errorForMin={minValue < 0 || maxValue <= minValue}
                              errorForMax={maxValue < 0 || maxValue <= minValue}
                                />
                :
                <div className = {s.counter}>

                    <Window count = {count} maxValue = {maxValue}/>

                    <div className={s.btnBlock}>
                        <SuperButton callBack = {incHandler}
                                     disabled = {count === maxValue}>
                                     increment
                        </SuperButton>

                        <SuperButton callBack = {resetHandler}
                                     disabled = {count === minValue}>
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


export default CounterWithCombinedSettings