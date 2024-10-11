import { useState, useEffect } from 'react';
import styles from './scrollUp.module.scss';

const ScrollUp = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const threshold = 100;
            setIsVisible(scrollY > threshold);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className={`${styles.scrollUp} ${isVisible ? styles.visible : ''}`} onClick={scrollToTop}>
            <span>
                <svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0.0973301 11.5392V16.8389H5.46405V11.5392H0.0973301ZM5.46253 6.23905V11.5387L10.8293 11.5387V6.23905H5.46253ZM10.8304 6.24119L10.8304 0.941503H16.1972V6.23905L21.5624 6.23905V11.5387H16.1957V6.24119H10.8304ZM21.5661 16.8389V11.5392H26.9329V16.8389H21.5661Z" fill="black" />
                </svg>
            </span>
        </div>
    );
};

export default ScrollUp;
