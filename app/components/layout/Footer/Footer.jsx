import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import orig1 from "../../../../public/img/orig1.png"
import orig2 from "../../../../public/img/orig2.png"

const Footer = () => {
    const { lan } = React.useContext(Context);
    const [data] = React.useState([
        {
            id: 1,
            link: '/',
            img: orig1,
            title: 'Подписывайтесь на рассылку',
            text: "Только полезные письма от команды GEEKS",
        },
        {
            id: 2,
            link: '/',
            img: orig2,
            title: 'Присоединяйтесь к телеграм-каналу',
            text: "Всё о стажировках в GEEKS и старте в IT",
        },
    ])
    const [social] = React.useState([
        {
            id: 1,
            link: '/',
            icon: "fa-brands fa-telegram",
        },
        {
            id: 2,
            link: '/',
            icon: "fa-brands fa-vk",
        },
        {
            id: 3,
            link: '/',
            icon: "fa-brands fa-youtube",
        },
        {
            id: 4,
            link: '/',
            icon: "fa-brands fa-facebook",
        },
    ])
    return (
        <section className={styles.footer}>
            <MyContainer>
                <div className={styles.footer__content}>
                    <h2 className={styles.footer__content__title}>Biz aloqada bo'lamiz</h2>
                    <div className={styles.footer__content__list}>
                        {
                            data?.map((item) => (
                                <Link
                                    key={item.id}
                                    className={styles.footer__content__list__item}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <h3 className={styles.footer__content__list__item__title}>
                                        {item.title}
                                    </h3>
                                    <Image
                                        src={item.img}
                                        alt='img'
                                    />
                                    <p className={styles.footer__content__list__item__text}>
                                        {item.text}
                                    </p>
                                    <b className={styles.footer__content__list__item__btn}>
                                        <svg width="20px" height="20px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <polyline points="6,4 14,10 6,16" fill="none" stroke="currentColor" stroke-width=".15rem" />
                                        </svg>
                                    </b>
                                </Link>
                            ))
                        }
                    </div>
                    <div className={styles.footer__content__bottom}>
                        {
                            social?.map((item) => (
                                <Link
                                    key={item.id}
                                    className={styles.footer__content__bottom__link}
                                    href={item.link}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <i className={item.icon}></i>
                                </Link>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Footer;