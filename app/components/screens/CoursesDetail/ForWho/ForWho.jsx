import Image from 'next/image'
import styles from './ForWho.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext } from 'react';
import komp from '../../../../../public/img/svg/komp.svg'

const ForWho = () => {
    const { lan } = useContext(Context);

    return (
        <section className={styles.forWho}>
            <MyContainer>
                <div className={styles.forWho__content}>
                    <h2 className={styles.forWho__content__title}>Kimlar uchun ?</h2>
                    <div className={styles.forWho__content__list1}>
                        {
                            [1, 2, 3]?.map((_, index) => (
                                <div data-aos="fade-up" className={styles.forWho__content__list1__item}>
                                    <span className={styles.number}>{index + 1}</span>
                                    <p className={styles.text}>Kompyuterdan foydalanishni o’rganmoqchi bo’lganlar</p>
                                </div>
                            ))
                        }
                    </div>
                    <div className={styles.forWho__content__list2}>
                        {
                            [1, 2, 3, 4]?.map(() => (
                                <div data-aos="fade-up" className={styles.forWho__content__list2__item}>
                                    <p className={styles.text}>Mutaxasislardan bilim olish</p>
                                    <span className={styles.icon}>
                                        <Image
                                            src={komp}
                                            alt='icon'
                                        />
                                    </span>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default ForWho;