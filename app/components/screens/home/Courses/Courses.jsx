import Image from 'next/image'
import styles from './Courses.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import svg from '../../../../../public/img/bc/bc-svg3.svg'
import { useContext, useEffect, useState } from 'react';
import komp2 from '../../../../../public/img/svg/komp2.svg'
import system from '../../../../../public/img/svg/system.svg'
import mouse from '../../../../../public/img/svg/mouse.svg'
import usb from '../../../../../public/img/svg/usb.svg'


const Courses = () => {
    const {
        url,
        infoModal,
        registerModal,
        setInfoModal,
        setCoursesId,
        coursesId,
    } = useContext(Context);
    const [coursesData, setCoursesData] = useState([]);
    const [loader, setLoader] = useState(true);

    useEffect(() => {
        const fullUrl = `${url}/courses/`;
        const fetchData = async () => {
            try {
                const response = await fetch(fullUrl, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });

                if (!response.ok) {
                    throw new Error(`Ошибка: ${response.status}`);
                }

                const data = await response.json();

                console.log(data);

                if (data.message.status === "success") {
                    setCoursesData(data.data);
                    setLoader(false);
                } else {
                    console.error('Ошибка: Некорректные данные получены от сервера.');
                }

            } catch (error) {
                console.error('Ошибка при запросе данных:', error.message);
            }
        };

        fetchData();
    }, [infoModal, registerModal]);

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
                            !loader ? (
                                coursesData?.map((item, key) => (
                                    <p
                                        key={key}
                                        onClick={() => {
                                            setCoursesId(item.id)
                                            setInfoModal(true)
                                        }}
                                        className={styles.courses__content__list__item}
                                    >
                                        {item.title}
                                    </p>
                                ))

                            ) : (
                                <div className={styles.skeleton__list}>
                                    <div className={styles.skeleton__list__item}>p</div>
                                    <div className={styles.skeleton__list__item}>p</div>
                                    <div className={styles.skeleton__list__item}>p</div>
                                    <div className={styles.skeleton__list__item}>p</div>
                                    <div className={styles.skeleton__list__item}>p</div>
                                </div>
                            )
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