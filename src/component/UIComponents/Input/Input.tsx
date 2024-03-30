import React from 'react'
import styles from './Style.module.scss'

interface InputProp {
    placeholder?: string,
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined,
    value?: string,
    type?: string,
    name?: string,
    onBlur?: React.FocusEventHandler<HTMLInputElement> | undefined,
}
const Input = ({ placeholder, onChange, value, type, name, onBlur }: InputProp) => {
    return (
        <input className={styles.input} placeholder={placeholder} onBlur={onBlur} value={value} onChange={onChange} type={type ? type : 'text'} name={name} />
    )
}

export default Input