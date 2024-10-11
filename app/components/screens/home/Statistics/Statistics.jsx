import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Statistics.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import phone from '../../../../../public/img/svg/phone.svg'
import pan from '../../../../../public/img/svg/pan.svg'
import money from '../../../../../public/img/svg/money.svg'
import container from '../../../../../public/img/svg/container.svg'

const Statistics = () => {
    const { lan } = React.useContext(Context);
    const data = [
        {
            id: 1,
            number: "10",
            text: "ortiq zamonaviy kurslar",
            icon: pan,
        },
        {
            id: 2,
            number: "~7",
            text: "yil tajribaga ega ustozlar",
            icon: container,
        },
        {
            id: 3,
            number: "80%",
            text: "bitiruvchilar pul topishni boshlaydi",
            icon: money,
        },
    ]
    return (
        <section id='about' className={styles.statistics}>
            <MyContainer>
                <div className={styles.statistics__content}>
                    <div className={styles.statistics__content__title}>
                        <span className={styles.statistics__content__title__img}>
                            <Image
                                src={phone}
                                alt='phone'
                            />
                        </span>
                        <h2>Geeks raqamlarda</h2>
                    </div>
                    <div className={styles.statistics__content__list}>
                        {
                            data.map((item) => (
                                <div
                                    data-aos="zoom-in"
                                    className={styles.statistics__content__list__item}
                                    key={item.id}
                                >
                                    <span className={styles.img}>
                                        <Image
                                            src={item.icon}
                                            alt={item.text}
                                        />
                                    </span>
                                    <div className={styles.elements}>
                                        <h3>{item.number}</h3>
                                        <p>{item.text}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Statistics;