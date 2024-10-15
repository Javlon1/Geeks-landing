import Link from 'next/link'
import Image from 'next/image'
import styles from './Course.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { Navigation, Autoplay, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';


const Course = () => {
    const { lan } = useContext(Context);
    const router = useRouter()
    const [loader, setLoader] = useState(true)
    const [data, setData] = useState([
        {
            id: 1,
            title: "Python fullstack",
            day: "12 oy",
        },
        {
            id: 2,
            title: "Python fullstack",
            day: "12 oy",
        },
        {
            id: 3,
            title: "Python fullstack",
            day: "12 oy",
        },
        {
            id: 4,
            title: "Python fullstack",
            day: "12 oy",
        },
        {
            id: 5,
            title: "Python fullstack",
            day: "12 oy",
        },
    ])

    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    if (!isClient) {
        return null;
    }

    return (
        <section className={styles.course}>
            <MyContainer>
                <div className={styles.course__content}>
                    <div className={styles.course__content__header}>
                        <div className={styles.course__content__header__title}>
                            <p>
                                Boshqa kurslar
                            </p>
                        </div>
                        <div className={styles.course__content__header__btns}>
                            <div className={styles.btn__next}>
                                <i className="fa-solid fa-angle-left"></i>
                            </div>
                            <div className={styles.btn__prev}>
                                <i className="fa-solid fa-angle-right"></i>
                            </div>
                        </div>
                    </div>
                    <Swiper
                        modules={[Navigation, Scrollbar, A11y, Autoplay]}
                        spaceBetween={10}
                        navigation={{
                            prevEl: `.${styles.btn__next}`,
                            nextEl: `.${styles.btn__prev}`,
                        }}
                        loop={true}
                        autoplay={{
                            delay: 3000,
                            disableOnInteraction: false,
                        }}
                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                            1200: {
                                slidesPerView: 4,
                            },
                        }}
                    >
                        {
                            !loader ? <p>Loading...</p> :
                                data?.map((item) => (
                                    <SwiperSlide key={item.id}>
                                        <div
                                            onClick={() =>
                                                router.push({
                                                    pathname: '/courses-detail',
                                                    query: {
                                                        courses_id: item.id
                                                    }
                                                })
                                            }
                                            className={styles.course__content__cart}
                                        >
                                            <h3>{item.title}</h3>
                                            <p>{item.day}</p>
                                        </div>
                                    </SwiperSlide>
                                ))
                        }
                    </Swiper>
                </div>
            </MyContainer>
        </section>
    )
}

export default Course;