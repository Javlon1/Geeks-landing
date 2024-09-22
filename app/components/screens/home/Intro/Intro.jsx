import { useEffect, useState } from 'react';
import Image from 'next/image';
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import icon1 from '../../../../../public/img/icon1.png'
import icon2 from '../../../../../public/img/icon2.png'
import icon3 from '../../../../../public/img/icon3.png'
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
const Intro = () => {
    const [data, setData] = useState([
        {
            id: 1,
            icon: icon1,
            text: "Back-end",
        },
        {
            id: 2,
            icon: icon2,
            text: "Front-end",
        },
        {
            id: 3,
            icon: icon3,
            text: "Full-stack",
        },
    ]);
    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const stripe = document.querySelector(`.${styles.stripe__content}`);
            if (stripe) {
                stripe.style.transform = `translateX(-${scrollPosition}px)`;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div className={styles.intro}>
            <MyContainer>
                <div className={styles.intro__content}>
                    <div className={styles.intro__content__body}>
                        <div className={styles.intro__content__body__left}>
                            <p className={styles.text}>Geeks bilan IT da karyera starti</p>
                        </div>
                        <div className={styles.intro__content__body__right}>
                            <p className={styles.text}>Amaliyot va ishga yo’naltirilgan IT o’quv ekosistemasi, sohada o’zingizni sinab ko’rishingiz va yangi zamonaviy kasblarni egallashingiz mumkin.</p>
                        </div>
                    </div>
                    <div className={styles.intro__content__bottom}>
                        <ul className={styles.intro__content__bottom__list}>
                            {
                                data?.map((item) => (
                                    <li className={styles.intro__content__bottom__list__item} key={item.id}>
                                        <Image
                                            src={item.icon}
                                            alt='icon'
                                            width={50}
                                            height={50}
                                        />
                                        <p>{item.text}</p>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <button className={styles.intro__btn}>Tanlash</button>
            </MyContainer>
            <div className={styles.stripe}>
                <div className={styles.stripe__content}></div>
            </div>
        </div>
    )
}

export default Intro;