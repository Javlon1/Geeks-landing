import Link from 'next/link'
import Image from 'next/image'
import styles from './Communication.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext } from 'react';
import check from "../../../../../public/img/icons/check.svg"

const Communication = () => {
    const { setRegisterModal } = useContext(Context);
    const list = [
        {
            id: 1,
            text: "IT-ni o’rganmoqchiman, sohaga anchadan beri qiziqaman qanday qilib o’rganish mumkin?",
            time: "10:04",
            img: check
        },
        {
            id: 2,
            text: "Faqat pul topa olish darajasida bilim beradigan o’quv kurslari kerak !",
            time: "10:05",
            img: check
        },
        {
            id: 3,
            text: "Geeks Andijanga bor! Pul topishni o’rgatadigan kurslari bor!",
            time: "10:30",
        },
        {
            id: 4,
            text: "Xabar ...",
        },
    ]


    return (
        <section className={styles.communication}>
            <MyContainer>
                <div className={styles.communication__content}>
                    <div className={styles.communication__content__left}>
                        <ul className={styles.communication__content__left__list}>
                            {
                                list.map((item) => (
                                    <li
                                        data-aos="fade-up"
                                        className={styles.communication__content__left__list__item}
                                        key={item.id}
                                    >
                                        <b className={styles.communication__content__left__list__item__text}>
                                            {item.text}
                                        </b>
                                        <span className={styles.elements}>
                                            {
                                                item.time &&
                                                <p className={styles.elements__time}>{item.time}</p>
                                            }
                                            {
                                                item.img &&
                                                <Image
                                                    src={item.img}
                                                    alt='check'
                                                />
                                            }
                                        </span>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className={styles.communication__content__right}>
                        <h2 className={styles.communication__content__right__title}>Bilim ol</h2>
                        <b className={styles.communication__content__right__subtitle}>Geeks jamoasiga qo’shil, IT-karyerangni qur !</b>
                        <p className={styles.communication__content__right__text}>Kuchli mutaxasislar jamoasi, aktual o’quv rejalar, imtihonlar va hakatonlar orqali sifatli bilim ol.</p>
                        <button onClick={() => { setRegisterModal(true) }} className={styles.communication__content__right__btn}>Ro’yhatdan o’tish</button>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Communication;