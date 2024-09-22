import * as React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from './Header.module.scss';
import MyContainer from '../../ui/MyContainer/MyContainer';
import logo from "../../../../public/img/logo.png"

const Header = () => {

    return (
        <header className={styles.header}>
            <MyContainer>
                <nav className={styles.nav}>
                    <Link className={styles.nav__logo} href={"#"}>
                        <Image
                            src={logo}
                            alt='logo'
                            width={150}
                            height={40}
                            priority
                        />
                    </Link>
                    <ul className={styles.nav__list}>
                        <li className={styles.nav__list__item}>
                            <Link href={'#'}>Bosh sahifa</Link>
                        </li>
                        <li className={styles.nav__list__item}>
                            <Link href={'#'}>Yangiliklar</Link>
                        </li>
                        <li className={styles.nav__list__item}>
                            <Link href={'#'}>Kontaktlar</Link>
                        </li>
                    </ul>
                    <button className={styles.nav__btn}>Хочу в <span>GEEKS</span></button>
                </nav>
            </MyContainer>
        </header>
    );
};

export default Header;