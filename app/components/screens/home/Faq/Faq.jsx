import Link from 'next/link'
import Image from 'next/image'
import styles from './Faq.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useState } from 'react';
import question from '../../../../../public/img/svg/question.svg';
import up from '../../../../../public/img/svg/up.svg';

const Faq = () => {
    const { lan } = useContext(Context);
    const [openIndex, setOpenIndex] = useState(null);

    const toggleFaq = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const list = [
        { id: 1, question: "Как начать учиться?", answer: "Lorem ipsum dolor sit amet..." },
        { id: 2, question: "Как работает платформа?", answer: "Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet..." },
        { id: 3, question: "Как работает платформа?", answer: "Lorem ipsum dolor sit amet..." },
        { id: 4, question: "Как работает платформа?", answer: "Lorem ipsum dolor sit amet..." },
        { id: 5, question: "Как работает платформа?", answer: "Lorem ipsum dolor sit amet..." },
    ];

    return (
        <section className={styles.faq}>
            <MyContainer>
                <div className={styles.faq__content}>
                    <div className={styles.faq__content__title}>
                        <h2>FAQ</h2>
                        <span>
                            <Image
                                src={question}
                                alt='question'
                            />
                        </span>
                    </div>
                    {list.map((item, index) => (
                        <div key={item.id} className={styles.faq__content__list}>
                            <div
                                data-aos="fade-up"
                                className={styles.faq__content__list__question}
                                onClick={() => toggleFaq(index)}
                                style={{
                                    borderBottomLeftRadius: openIndex === index ? '0' : '1rem',
                                    borderBottomRightRadius: openIndex === index ? '0' : '1rem',
                                    transition: 'all .3s ease',
                                }}
                            >
                                <h3 className={styles.faq__content__list__question__text}>{item.question}</h3>
                                <span
                                    className={styles.icon}
                                    style={{
                                        transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)',
                                        transition: 'all .3s ease',
                                    }}
                                >
                                    <Image src={up} alt='toggle icon' />
                                </span>
                            </div>

                            <div
                                className={styles.faq__content__list__answer}
                                style={{
                                    maxHeight: openIndex === index ? '500px' : '0',
                                    padding: openIndex === index ? '1rem' : '0 1rem',
                                    overflow: 'hidden',
                                    transition: 'all .3s ease',
                                    borderBottomLeftRadius: openIndex === index ? '1rem' : '0',
                                    borderBottomRightRadius: openIndex === index ? '1rem' : '0',
                                }}
                            >
                                {
                                    (openIndex === index) &&
                                    <p>{item.answer}</p>
                                }
                            </div>
                        </div>
                    ))}
                </div>
            </MyContainer>
        </section>
    )
}

export default Faq;