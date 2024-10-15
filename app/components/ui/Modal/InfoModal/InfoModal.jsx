import Link from 'next/link'
import Image from 'next/image'
import styles from './InfoModal.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import svg1 from '../../../../../public/img/svg/komp2.svg'
import svg2 from '../../../../../public/img/svg/heart.svg'
import svg3 from '../../../../../public/img/svg/system.svg'
import close from '../../../../../public/img/svg/X.svg'
import { useContext, useEffect, useState } from 'react';

const InfoModal = () => {
    const {
        url,
        setAct,
        infoModal,
        coursesId,
        setInfoModal,
        registerModal,
        setRegisterModal,
    } = useContext(Context);

    const [loader, setLoader] = useState(true);
    const [coursesData, setCoursesData] = useState([]);

    console.log(coursesId);

    useEffect(() => {
        const fullUrl = `${url}/courses?id=${coursesId}`;
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
        <>
            {
                infoModal &&
                <div className={styles.infoModal}>
                    <div className={styles.infoModal__content}>
                        <div className={styles.infoModal__content__left}>
                            <div className={styles.infoModal__content__left__title}>
                                <span>{coursesData[0]?.title}ni</span>
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
                                !loader ? (
                                    coursesData[0]?.coursedescription?.map((item) => (
                                        <div key={item.id} className={styles.infoModal__content__right__element}>
                                            <h2 className={styles.title}>{item.title}</h2>
                                            <p className={styles.text}>{item.description}</p>
                                        </div>
                                    ))

                                ) : (
                                    <div className={styles.skeleton__list}>
                                        <div className={styles.skeleton__list__item}>p</div>
                                        <div className={styles.skeleton__list__item}>p</div>
                                        <div className={styles.skeleton__list__item}>p</div>
                                    </div>
                                )
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