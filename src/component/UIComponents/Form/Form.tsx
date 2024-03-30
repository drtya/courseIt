import React from 'react'
import styles from './Style.module.scss'
interface FormProp{
  children:any,
  onSubmit:React.FormEventHandler<HTMLFormElement> | undefined

}
const Form = ({children,onSubmit}:FormProp) => {
  return (
    <form onSubmit={onSubmit} className={styles.form}>{children}</form>
  )
}

export default Form