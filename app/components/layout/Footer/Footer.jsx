import * as React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import styles from './Footer.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'

const Footer = () => {
    const { lan } = React.useContext(Context);

    return (
        <section className={styles.footer}>
            <MyContainer>
                <div className={styles.footer__content}>
                    <h2 className={styles.footer__content__title}>Biz aloqada bo'lamiz</h2>
                
                </div>
            </MyContainer>
        </section>
    )
}

export default Footer;