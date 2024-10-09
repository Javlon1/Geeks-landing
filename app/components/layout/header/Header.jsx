import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './Header.module.scss';
import MyContainer from '../../ui/MyContainer/MyContainer';
import logo from "../../../../public/img/base/logo.png";
import resLogo from '../../../../public/img/base/res-logo.svg';

const Header = () => {
    const [nav, setNav] = useState(false)
    const [links] = useState([

        {
            id: 1,
            link: '#course',
            text: 'Kurslar',
        }, {
            id: 2,
            link: '#mentor',
            text: 'Mentorlar',
        },
        {
            id: 3,
            link: '#about',
            text: 'Biz haqidmizda',
        },
        {
            id: 4,
            link: '#contact',
            text: 'Bog’lanish',
        },
    ])

    return (
        <header className={styles.header}>
            <MyContainer>
                <div className={`${styles.modalOpacity} ${nav ? styles.actModal : ""}`}
                    onClick={() => {
                        setNav(false);
                    }}
                ></div>
                <div className={styles.header__content}>
                    <nav className={styles.header__content__nav}>
                        <div className={styles.header__content__nav__logo}><div
                            onClick={() => setNav(!nav)}
                            className={`${styles.header__content__nav__logo__btnHam} ${nav ? styles.activeHam : ''}`}
                        ></div>
                            <Link className={styles.logo} href="/">
                                <Image
                                    src={logo}
                                    alt="logo"
                                    width={150}
                                    height={40}
                                />
                            </Link>
                            <Link className={styles.resLogo} href="/">
                                <Image
                                    src={resLogo}
                                    alt="logo"
                                    width={50}
                                    height={40}
                                />
                            </Link>
                        </div>
                        <ul className={`${styles.header__content__nav__list} ${nav ? styles.activeList : ''}`}>
                            {
                                links.map((link) => (
                                    <li key={link.id} className={styles.header__content__nav__list__item}>
                                        <Link href={link.link}>{link.text}</Link>
                                    </li>
                                ))
                            }
                        </ul>
                    </nav>
                    <button className={styles.header__content__btn}>O’qishni boshlash</button>
                </div>
            </MyContainer>
        </header>
    );
};

export default Header;