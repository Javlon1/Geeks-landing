import Link from 'next/link'
import Image from 'next/image'
import styles from './Expert.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useRef, useState } from 'react';
import experience from "../../../../../public/img/experience.png";
import { Navigation, Scrollbar, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import me from "../../../../../public/img/me.png"

const Expert = () => {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const { lan } = useContext(Context);

    const [dataEl] = useState([
        {
            id: 1,
            title: "Поможем оформить портфолио и резюме",
            text: "А еще сопроводительные письма и самопрезентацию",
        },
        {
            id: 2,
            title: "Подготовим к собеседованиям",
            text: "Узнаете, какие вопросы задают рекрутеры и как на них отвечать",
        },
        {
            id: 3,
            title: "Откроем доступ к базе вакансий",
            text: "Будем рекомендовать вас напрямую нашим партнерам",
        },
    ])

    const [data] = useState([
        {
            id: 1,
            img: me,
            name: "Mukhammadjonov Javlon",
            text: "Лидер направления Front-end в Андижане. Опыт работы — более 1 года"
        },
        {
            id: 2,
            img: me,
            name: "Alimov Bekzod",
            text: "Разработчик Back-end в Ташкенте. Опыт работы — более 2 лет"
        },
        {
            id: 3,
            img: me,
            name: "Karimova Dilnoza",
            text: "UX/UI дизайнер. Опыт работы — более 3 лет"
        },
        {
            id: 4,
            img: me,
            name: "Tursunov Abdulla",
            text: "Инженер DevOps в Самарканде. Опыт работы — более 4 лет"
        },
        {
            id: 5,
            img: me,
            name: "Saidov Aziz",
            text: "Full-stack разработчик. Опыт работы — более 5 лет"
        },
        {
            id: 6,
            img: me,
            name: "Ismoilova Zulfiyya",
            text: "QA инженер. Опыт работы — более 1 года"
        },
        {
            id: 7,
            img: me,
            name: "Rahmonov Farrukh",
            text: "Мобильный разработчик. Опыт работы — более 2 лет"
        },
        {
            id: 8,
            img: me,
            name: "Sharipov Javohir",
            text: "Разработчик искусственного интеллекта. Опыт работы — более 3 лет"
        },
        {
            id: 9,
            img: me,
            name: "Nematov Sherzod",
            text: "Технический писатель. Опыт работы — более 6 лет"
        },
        {
            id: 10,
            img: me,
            name: "Yusupov Anvar",
            text: "Системный архитектор. Опыт работы — более 7 лет"
        }
    ])
    return (
        <section className={styles.expert}>
            <MyContainer>
                <div className={styles.expert__content}>
                    <div className={styles.expert__content__top}>
                        <div className={styles.expert__content__top__header}>
                            <h2 className={styles.expert__content__top__header__title}>
                                С вами будут работать лучшие эксперты в IT
                            </h2>
                            <div className={styles.expert__content__top__header__btns}>
                                <div ref={prevRef} className={styles.btn__next}>
                                    <i className="fa-solid fa-angle-left"></i>
                                </div>
                                <div ref={nextRef} className={styles.btn__prev}>
                                    <i className="fa-solid fa-angle-right"></i>
                                </div>
                            </div>
                        </div>
                        <Swiper
                            modules={[Navigation, Scrollbar, A11y, Autoplay]}
                            spaceBetween={10}
                            onInit={(swiper) => {
                                swiper.params.navigation.prevEl = prevRef.current;
                                swiper.params.navigation.nextEl = nextRef.current;
                                swiper.navigation.init();
                                swiper.navigation.update();
                            }}
                            loop={true}
                            autoplay={{
                                delay: 3000,
                            }}
                            breakpoints={{
                                320: {
                                    slidesPerView: 1,
                                },
                                768: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 4,
                                },
                            }}
                        >
                            {data?.map((item) => (
                                <SwiperSlide key={item.id}>
                                    <div className={styles.expert__content__top__cart}>
                                        <Image
                                            src={item.img}
                                            alt="slayd"
                                            priority
                                        />
                                        <b>{item.name}</b>
                                        <p>{item.text}</p>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>

                    <div className={styles.expert__content__body}>
                        <h2 className={styles.expert__content__body__title}>
                            Получите опыт реальной работы
                        </h2>
                        <div className={styles.expert__content__body__list}>
                            <div className={styles.expert__content__body__list__left}>
                                <Image
                                    src={experience}
                                    alt='img'
                                />
                            </div>
                            <div className={styles.expert__content__body__list__right}>
                                <span className={styles.expert__content__body__list__right__icon}>
                                    <i className="fa-solid fa-briefcase"></i>
                                </span>
                                <h2 className={styles.expert__content__body__list__right__title}>
                                    Разработаете маркетплейс совместно с другими студентами под руководством наставника
                                </h2>
                                <p className={styles.expert__content__body__list__right__text}>
                                    Получите сильный кейс в портфолио, а также научитесь работать в команде
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className={styles.expert__content__bottom}>
                        <h2 className={styles.expert__content__bottom__title}>
                            Цель обучения — ваше трудоустройство
                        </h2>
                        <div className={styles.expert__content__bottom__list}>
                            {
                                dataEl?.map((item) => (
                                    <div key={item.id} className={styles.expert__content__bottom__list__item}>
                                        <span>0{item.id}</span>
                                        <h3>{item.title}</h3>
                                        <p>{item.text}</p>
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

export default Expert;