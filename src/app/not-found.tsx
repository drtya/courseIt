import styles from './Error.module.scss'
import Link from 'next/link'

const Error = () => {
  return (
    <div className={styles.error}>
        <h1 className={styles.error_title}>404</h1>
        <p className={styles.error_msg}>page is not found</p>
        <Link href={'/'} className={styles.error_back}>Вернуться домой</Link>
    </div>
  )
}

export default Error