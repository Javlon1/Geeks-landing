import Link from 'next/link'
import Image from 'next/image'
import styles from './InfoModal.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import svg1 from '../../../../../public/img/svg/komp2.svg'
import svg2 from '../../../../../public/img/svg/heart.svg'
import svg3 from '../../../../../public/img/svg/system.svg'
import close from '../../../../../public/img/svg/X.svg'
import { useContext, useState } from 'react';

const InfoModal = () => {
    const { infoModal, setInfoModal, setRegisterModal, setAct } = useContext(Context);

    const [data, setData] = useState([
        {
            id: 1,
            title: "Qurilmalar",
            text: "Kompyuterdan va uning qurilmalaridan foydalanishni o’rganish, dasturlar o’rnatish va ishlash. Standart qurilmalar va"
        },
        {
            id: 2,
            title: "Foydalanish",
            text: "Лучшие 50 участников в каждом треке получат электронные сертификаты участника второго сезона CodeRun."
        },
        {
            id: 3,
            title: "Ustunlik",
            text: "Упрощённая схема собеседований в Яндекс для 20 лучших участников каждого трека."
        },
    ])

    return (
        <>
            {
                infoModal &&
                <div className={styles.infoModal}>
                    <div className={styles.infoModal__content}>
                        <div className={styles.infoModal__content__left}>
                            <div className={styles.infoModal__content__left__title}>
                                <span>Kompyuterni</span>
                                <div className={styles.img}>
                                    <p>
                                        0 dan
                                    </p>
                                    <span className={styles.img__span}>
                                        <Image
                                            src={svg2}
                                            alt='svg'
                                        />
                                    </span>
                                </div>
                                <span>O’rganing</span>
                            </div>
                            <div className={styles.infoModal__content__left__svg}>
                                <span>
                                    <Image
                                        src={svg1}
                                        alt='svg'
                                    />
                                </span>
                                <span>
                                    <Image
                                        src={svg3}
                                        alt='svg'
                                    />
                                </span>
                            </div>
                            <button
                                className={styles.infoModal__content__left__btn}
                                onClick={() => {
                                    setInfoModal(false)
                                    setRegisterModal(true)
                                    setAct(false)
                                }}
                            >Joy band qilish</button>
                        </div>
                        <div className={styles.infoModal__content__right}>
                            {
                                data?.map((item) => (
                                    <div key={item.id} className={styles.infoModal__content__right__element}>
                                        <h2 className={styles.title}>{item.title}</h2>
                                        <p className={styles.text}>{item.text}</p>
                                    </div>
                                ))
                            }
                        </div>
                        <span
                            className={styles.close}
                            onClick={() => {
                                setInfoModal(false)
                                setAct(true)
                            }}
                        >
                            <Image
                                src={close}
                                alt='close'
                            />
                        </span>
                    </div>
                </div>
            }
        </>
    )
}

export default InfoModal;