import Link from 'next/link'
import Image from 'next/image'
import styles from './Community.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useState } from 'react';
import user from '../../../../../public/img/user.png'
import svg1 from '../../../../../public/img/svg1.png'
import svg2 from '../../../../../public/img/svg2.png'


const Community = () => {
    const { lan } = useContext(Context);

    const [data, setData] = useState([
        {
            id: 1,
            icon: user,
        },
        {
            id: 2,
            icon: user,
        },
        {
            id: 3,
            icon: user,
        },
        {
            id: 1,
            icon: user,
        },
        {
            id: 2,
            icon: user,
        },
        {
            id: 3,
            icon: user,
        },
        {
            id: 1,
            icon: user,
        },
        {
            id: 2,
            icon: user,
        },
        {
            id: 3,
            icon: user,
        },
        {
            id: 1,
            icon: user,
        },
        {
            id: 2,
            icon: user,
        },
        {
            id: 3,
            icon: user,
        },
        {
            id: 1,
            icon: user,
        },
        {
            id: 2,
            icon: user,
        },
        {
            id: 3,
            icon: user,
        },
    ]);

    return (
        <section className={styles.community}>
            <MyContainer>
                <div className={styles.community__content}>
                    <div className={styles.community__content__body}>
                        <div className={styles.community__content__body__left}>
                            <p className={styles.text}>
                                Сообщество
                                профессионалов
                            </p>
                        </div>
                        <div className={styles.community__content__body__right}>
                            <p className={styles.text}>
                                Стажируйтесь и работайте над продуктами <span>GEEKS</span>
                                в команде экспертов. Каждый день они совершенствуют
                                сервисы с миллионами пользователей. У них точно есть
                                чему поучиться
                            </p>
                        </div>
                    </div>
                    <div className={styles.community__content__team}>
                        <p>GEEKS</p>
                        <div className={styles.community__content__team__icons}>
                            <Image
                                src={svg1}
                                priority
                                alt='icon'
                            />
                            <span>
                                <Image
                                    src={svg2}
                                    priority
                                    alt='icon'
                                />
                            </span>
                        </div>
                    </div>
                    <div className={styles.community__content__bottom}>
                        <ul className={styles.community__content__bottom__list}>
                            {
                                data?.map((item) => (
                                    <li className={styles.community__content__bottom__list__item} key={item.id}>
                                        <Image
                                            src={item.icon}
                                            alt='icon'
                                            width={50}
                                            height={50}
                                        />
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </div>
            </MyContainer>
        </section>
    )
}

export default Community;