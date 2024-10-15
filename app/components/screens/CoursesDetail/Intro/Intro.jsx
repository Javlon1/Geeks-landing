import Image from 'next/image'
import styles from './Intro.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import heart from '../../../../../public/img/svg/heart.svg'
import InfoModal from '@/app/components/ui/Modal/InfoModal/InfoModal';
import RegisterModal from '@/app/components/ui/Modal/RegisterModal/RegisterModal';
import { useContext } from 'react';

const Intro = () => {
    const { lan } = useContext(Context);

    return (
        <section className={styles.intro}>
            <MyContainer>
                <InfoModal />
                <RegisterModal />
                <div className={styles.intro__content}>
                    <div className={styles.intro__content__left}>
                        <h1>Computer Science - Foundation</h1>
                    </div>
                    <div className={styles.intro__content__right}>
                        <p>2 oylik offline Computer Science kursi axborot texnologiya olamida birinchi qadamni tashlamoqchi bo'lganlar uchun mo'ljallangan.</p>
                        <p>Kurs davomida siz kompyuterdan foydalanishni, turli standart dasturlar bilan ishlashni, internet va unga oid xizmatlardan, suniy intelektlardan foydalanishni o'rganasiz.</p>
                    </div>
                    <div className={styles.intro__content__bottom}>
                        {
                            [1, 2, 3, 4, 5, 6, 7]?.map((_, index) => (
                                <div key={index} className={styles.intro__content__bottom__item}>
                                    <span className={styles.intro__content__bottom__item__img}>
                                        <Image
                                            src={heart}
                                            alt='heart'
                                        />
                                    </span>
                                    <h3 className={styles.intro__content__bottom__item__text}>Bilim ol</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Intro;