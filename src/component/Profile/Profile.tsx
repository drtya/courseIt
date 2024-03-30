import React from 'react'
import { Input } from '@/component/UIComponents'
import styles from './Style.module.scss'

const Profile = () => {
    return (
        <section className={styles.profile + ' containerup'}>
            <div className={styles.profile_photo}>
                <img className={styles.profile_photo_img} src="" alt="" />
                <Input type='file' />
            </div>
            <div className={styles.profile_info}>
                <p>Email: Valentin@inbox.com</p>
                <p>Имя: Валентин Андреев</p>
                <p>Группа: ПИ 2-22</p>
            </div>
            <p className={styles.test}>Ваш балл: 0</p>
        </section>
    )
}

export default Profile