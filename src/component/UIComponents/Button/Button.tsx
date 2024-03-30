import React from 'react'
import styles from './Style.module.scss'
interface ButtonProp {
  children: any,
  onClick?: React.MouseEventHandler<HTMLButtonElement>,
  type?: "button" | "submit" | "reset" | undefined
}
const Button = ({ children, onClick, type }: ButtonProp) => {
  return (
    <button onClick={onClick} type={type ? type : 'button'} className={styles.button}>{children}</button>
  )
}

export default Button