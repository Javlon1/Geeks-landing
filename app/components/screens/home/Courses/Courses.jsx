import Image from 'next/image'
import styles from './Courses.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import svg from '../../../../../public/img/bc/bc-svg3.svg'
import { useContext } from 'react';
import komp2 from '../../../../../public/img/svg/komp2.svg'
import system from '../../../../../public/img/svg/system.svg'
import mouse from '../../../../../public/img/svg/mouse.svg'
import usb from '../../../../../public/img/svg/usb.svg'


const Courses = () => {
    const { setInfoModal } = useContext(Context);

    const courses = [
        {
            id: 1,
            text: "Computer science",
        },
        {
            id: 2,
            text: "Python",
        },
        {
            id: 3,
            text: "Sun’iy intelekt",
        },
        {
            id: 4,
            text: "BACK-END",
        },
        {
            id: 5,
            text: "Mobilografiya",
        },
        {
            id: 6,
            text: "Digital marketing",
        },
        {
            id: 7,
            text: "FRONT-END",
        },
    ]

    return (
        <section id='course' className={styles.courses}>
            <MyContainer>
                <div className={styles.courses__content}>
                    <div className={styles.courses__content__title}>
                        <Image
                            src={svg}
                            width={60}
                            alt='svg'
                        />
                        <h2>Kurslar</h2>
                    </div>
                    <div className={styles.courses__content__list}>
                        <span className={styles.span1}>
                            <p>

                                <Image
                                    src={komp2}
                                    alt='icon'
                                />
                            </p>
                            <p>
                                <Image
                                    src={system}
                                    alt='icon'
                                />
                            </p>
                        </span>
                        {
                            courses.map((item) => (
                                <p onClick={() => setInfoModal(true)} className={styles.courses__content__list__item} key={item.id}>
                                    {item.text}
                                </p>
                            ))
                        }
                        <span className={styles.span2}>
                            <p>

                                <Image
                                    src={mouse}
                                    alt='icon'
                                />
                            </p>
                            <p>
                                <Image
                                    src={usb}
                                    alt='icon'
                                />
                            </p>
                        </span>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Courses;