import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import up from "../../../../../public/img/icons/up.png";
import dino from "../../../../../public/img/icons/dino.png";
import cases from "../../../../../public/img/icons/case.png";
import bug from "../../../../../public/img/icons/bug.png";
import Link from 'next/link';
import InfoModal from '@/app/components/ui/Modal/InfoModal/InfoModal';
import RegisterModal from '@/app/components/ui/Modal/RegisterModal/RegisterModal';

const Intro = () => {
    const [position1, setPosition1] = useState({ top: '80%', right: '20%' });
    const [position2, setPosition2] = useState({ top: '16%', left: '70%' });

    const handleMouseEnterBug1 = () => {
        setPosition1({
            top: `${Math.random() * 80}%`,
            right: `${Math.random() * 80}%`,
        });
    };

    const handleMouseEnterBug2 = () => {
        setPosition2({
            top: `${Math.random() * 80}%`,
            left: `${Math.random() * 80}%`,
        });
    };

    const [links] = useState([
        {
            id: 1,
            link: "#",
            icon: up,
            text: "Bilim ol",
        },
        {
            id: 2,
            link: "#",
            icon: dino,
            text: "Rivojlan",
        },
        {
            id: 3,
            link: "#",
            icon: cases,
            text: "Daromad qil!",
        },
    ])

    return (
        <div className={styles.intro}>
            <MyContainer>
                <InfoModal />
                <RegisterModal />
                <div className={styles.intro__content}>
                    <ul className={styles.intro__content__list}>
                        {
                            links.map((item) => {
                                if (item.id === 1) {
                                    return (
                                        <li key={item.id} className={styles.intro__content__list__item} >
                                            <p className={styles.img}>
                                                <Image
                                                    src={item.icon}
                                                    alt="icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </p>
                                            <Link href={item.link}>{item.text}</Link>
                                        </li>
                                    )
                                } else {
                                    return (
                                        <li key={item.id} className={styles.intro__content__list__item} >
                                            <Link href={item.link}>{item.text}</Link>
                                            <p className={styles.img}>
                                                <Image
                                                    src={item.icon}
                                                    alt="icon"
                                                    width={50}
                                                    height={50}
                                                />
                                            </p>
                                        </li>
                                    )
                                }
                            })
                        }
                    </ul>
                    <p className={styles.intro__content__text}>Yuqori talabga ega zamonaviy kasblarni o’rganing va  karyerangizni quring.</p>
                </div>
            </MyContainer >
            <div
                className={`${styles.bug} ${styles.circularMovement}`}
                style={{
                    top: position1.top,
                    left: position1.right,
                    transition: 'top 2s ease, left 2s ease',
                }}
                onMouseEnter={handleMouseEnterBug1}
            >
                <Image
                    src={bug}
                    alt="bug"
                    width={50}
                    height={50}
                />
            </div>
            <div
                className={`${styles.bug2} ${styles.circularMovement2}`}
                style={{
                    top: position2.top,
                    left: position2.left,
                    transition: 'top 2s ease, left 2s ease',
                }}
                onMouseEnter={handleMouseEnterBug2}
            >
                <Image
                    src={bug}
                    alt="bug"
                    width={50}
                    height={50}
                />
            </div>
        </div >
    )
}

export default Intro;