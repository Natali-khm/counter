import { ChangeEvent } from "react"
import s from './SuperInput.module.css'

type SuperInputProps = {
    value: number
    onChange: (e: ChangeEvent<HTMLInputElement>)=>void
    className: string
}

const SuperInput: React.FC<SuperInputProps> = ({value, onChange, className}) => {
  return <input type="number"
                value={value}
                onChange={onChange}
                className={className + ' ' + s.inputStyle}
                />
}

export default SuperInput