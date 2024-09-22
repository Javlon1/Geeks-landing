import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Direction.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import me from "../../../../../public/img/me.png"

const Direction = () => {
    const { lan } = React.useContext(Context);
    const [data] = React.useState([
        {
            id: 1,
            img: me,
            title: 'Front-end',
        },
        {
            id: 2,
            img: me,
            title: 'Front-end',
        },
        {
            id: 3,
            img: me,
            title: 'Front-end',
        },
        {
            id: 4,
            img: me,
            title: 'Front-end',
        },
        {
            id: 5,
            img: me,
            title: 'Front-end',
        },
        {
            id: 6,
            img: me,
            title: 'Front-end',
        },
        {
            id: 7,
            img: me,
            title: 'Front-end',
        },
        {
            id: 8,
            img: me,
            title: 'Front-end',
        },
    ])

    return (
        <section className={styles.direction}>
            <MyContainer>
                <div className={styles.direction__content}>
                    {
                        data?.map((item) => (
                            <div className={styles.direction__content__item} key={item.id}>
                                <Image src={item.img} alt="me" />
                                <h3 className={styles.title}>{item.title}</h3>
                            </div>
                        ))
                    }
                </div>
            </MyContainer>
        </section>
    )
}

export default Direction;