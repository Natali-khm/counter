import { ChangeEvent, useEffect, useState } from 'react';
import './CounterWithSeperatedSettings.css';
import Settings from './components/Settings';
import Counter from './components/Counter';


function CounterWithSeperatedSettings() {
  const [count, setCount] = useState<number>(0)  
  const [minValue, setMinValue] = useState<number>(0)  
  const [maxValue, setMaxValue] = useState<number>(3)  
  const [editMode, setEditMode] = useState<boolean>(false)

  const error = minValue < 0 || maxValue < 0 || maxValue <= minValue ? true : false;

  // ---------------------------------------------------- //

  const incHandler = () => count < maxValue && setCount(count + 1)

  const resetHandler = () => setCount(minValue)

  // ---------------------------------------------------- //

  const handleMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMaxValue(Number(e.currentTarget.value));
    if (!editMode) setEditMode(true)
  }

  const handleMinValue = (e: ChangeEvent<HTMLInputElement>) => {
    setMinValue(Number(e.currentTarget.value))    
    if (!editMode) setEditMode(true)
  }

  const setValue = () => {
    if (0 <= minValue) setCount(minValue);
    setEditMode(false)
  }

  // ---------------------------------------------------- //

  useEffect(()=>{
      const counter = localStorage.getItem('counterValue1')
      const minValue = localStorage.getItem('startValue1')
      const maxValue = localStorage.getItem('maxValue1')

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

  
  useEffect(()=>{
    localStorage.setItem('counterValue1', JSON.stringify(count))
    localStorage.setItem('startValue1', JSON.stringify(minValue))
    localStorage.setItem('maxValue1', JSON.stringify(maxValue))
  }, [count, minValue, maxValue])

    
  return (
      <div className={'wrapper'}>
        <Settings minValue={minValue}
                  maxValue={maxValue}
                  handleMinValue={handleMinValue}
                  handleMaxValue={handleMaxValue} 
                  setValue={setValue}
                  disabled={!editMode || error}
                  errorForMin={minValue < 0 || maxValue <= minValue}
                  errorForMax={maxValue < 0 || maxValue <= minValue}
                  />
        <Counter count={count}
                 maxValue={maxValue}
                 error={error}
                 incHandler={incHandler}
                 resetHandler={resetHandler}
                 disabledIncrement={count === maxValue || editMode}
                 disabledReset={count === minValue || editMode}
                 editMode={editMode}
                 />
      </div>
  );
}

export default CounterWithSeperatedSettings;
