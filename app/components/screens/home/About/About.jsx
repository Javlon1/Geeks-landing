import Link from 'next/link'
import Image from 'next/image'
import styles from './About.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer';
import question from '../../../../../public/img/icons/question.png';
import bc1 from '../../../../../public/img/bc/svg1.png';
import bc2 from '../../../../../public/img/bc/svg2.png';
import zipper from '../../../../../public/img/svg/zipper.svg';
import komp from '../../../../../public/img/svg/komp.svg';
import heart from '../../../../../public/img/svg/heart.svg';
import cup from '../../../../../public/img/svg/cup.svg';
import check from '../../../../../public/img/svg/check.svg';
import { useContext } from 'react';


const About = () => {
    const { lan } = useContext(Context);
    const data = [
        {
            id: 1,
            img: zipper,
            text: 'IT-kompanyalarda amaliyot qilish imkoniyati va frilansda ishlay olish',
        },
        {
            id: 2,
            img: komp,
            text: 'Kuchli bilimga ega mentorlardan tajribalar olish imkoni',
        },
        {
            id: 3,
            img: heart,
            text: 'Har oyda tekshiruv imtihonlari, o’zlashtirish nazorati',
        },
        {
            id: 4,
            img: cup,
            text: 'O’quv bo’limi orqali uyushtiriluvchi tadbirlar, musobaqalar, hakatonlar orqali o’qish davomida natijalarga erishish',
        },
        {
            id: 5,
            img: check,
            text: 'Kurs yakunida pul topa olish, daromadli ishlar qila olish ishga joylashish, masofaviy ishlash',
        },
    ]
    return (
        <section className={styles.about}>
            <MyContainer>
                <div className={styles.about__content}>
                    <div className={styles.about__content__title}>
                        <h2>Geeks Bu</h2>
                        <span>
                            <Image
                                src={question}
                                width={50}
                                alt='?'
                            />
                        </span>
                    </div>
                    <div className={styles.about__content__svg}>
                        <Image
                            src={bc1}
                            width={50}
                            alt='bc'
                        />
                        <Image
                            src={bc2}
                            width={50}
                            alt='bc'
                        />
                    </div>

                    <div className={styles.about__content__list}>
                        {
                            data.map(item => (
                                <div className={styles.about__content__list__item} key={item.id}>
                                    <Image
                                        className={styles.about__content__list__item__img}
                                        src={item.img}
                                        width={50}
                                        alt='me'
                                    />
                                    <p className={styles.about__content__list__item__text}>{item.text}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default About;