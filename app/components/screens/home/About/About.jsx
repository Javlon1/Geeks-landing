import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './About.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import user from "../../../../../public/img/man.png"
import two from "../../../../../public/img/two.png"


const About = () => {
    const { lan } = React.useContext(Context);

    const [data1] = React.useState([
        {
            id: 1,
            title: 'Выбор профессии после профориентации, а не до начала обучения',
            text: 'Вы попробуете разные профессии и выберите осознанно свою',
        },
        {
            id: 4,
            title: '70%',
            text: 'программы направлено на построение базовых знаний и навыков в IT',
        },
    ]);
    const [data2] = React.useState([
        {
            id: 2,
            img: user,
            title: 'Не понравилась выбранная профессия?',
            text: 'Замените её бесплатно во время учёбы',
        },
        {
            id: 3,
            img: two,
            title: 'Получите вторую IT-профессию с доплатой',
            text: 'Узнайте, как стать мультидисциплинарным специалистом',
        },
    ]);

    return (
        <section className={styles.about}>
            <MyContainer>
                <div className={styles.about__content}>
                    <h2 className={styles.about__content__title}>Один курс, чтобы гарантированно получить профессию</h2>
                    <div className={styles.about__content__body}>
                        <div className={`${styles.about__content__body__list} ${styles.direction}`}>
                            {
                                data1?.map((item) => (
                                    <div className={styles.about__content__body__list__item} key={item.id}>
                                        <h3 className={`${styles.about__content__body__list__item__title} ${item.title === "70%" ? styles.fs : ""}`}>{item.title}</h3>
                                        <p className={styles.about__content__body__list__item__text}>{item.text}</p>
                                        <button className={styles.about__content__body__list__item__btn}>
                                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <polyline points="6,4 14,10 6,16" fill="none" stroke="currentColor" stroke-width=".15rem" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                        <div className={`${styles.about__content__body__list} ${styles.flex}`}>
                            {
                                data2?.map((item) => (
                                    <div className={styles.about__content__body__list__item} key={item.id}>
                                        <h3 className={styles.about__content__body__list__item__title}>{item.title}</h3>
                                        <p className={styles.about__content__body__list__item__text}>{item.text}</p>
                                        <Image
                                            src={item.img}
                                            className={styles.about__content__body__list__item__img}
                                            alt='img'
                                            priority
                                        />
                                        <button className={styles.about__content__body__list__item__btn}>
                                            <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                <polyline points="6,4 14,10 6,16" fill="none" stroke="currentColor" stroke-width=".15rem" />
                                            </svg>
                                        </button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default About;