import Link from 'next/link'
import styles from './Footer.module.scss'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useState } from 'react';

const Footer = () => {
    const [links] = useState([

        {
            id: 1,
            link: '#course',
            text: 'Kurslar',
        },
        {
            id: 2,
            link: '#about',
            text: 'Geeks raqamlarda',
        },
        {
            id: 3,
            link: '#contact',
            text: 'Bog’lanish',
        },
    ])

    return (
        <section className={styles.footer}>
            <MyContainer>
                <div className={styles.footer__content}>
                    <div className={styles.footer__content__nav}>
                        {
                            links.map((link) => (
                                <span key={link.id} className={styles.footer__content__nav__item}>
                                    <Link href={link.link}>{link.text}</Link>
                                </span>
                            ))
                        }
                    </div>
                    <b className={styles.footer__content__text}>© 2024 OOO «GEEKS»</b>
                </div>
            </MyContainer>
        </section>
    )
}

export default Footer;