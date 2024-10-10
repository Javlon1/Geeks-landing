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
    const [openQuestionIndex, setOpenQuestionIndex] = useState(null);  // Для хранения состояния открытого вопроса

    const handleToggle = (index) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);  // Открыть/закрыть вопрос
    };

    const faqData = [
        {
            question: '1. Qanday qilib o’rganmoqchimisiz?',
            answer: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque, quasi saepe. Unde hic nisi qui.'
        },
        {
            question: '2. Qanday kurslarni tanlash mumkin?',
            answer: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
        },
        {
            question: '3. Qancha vaqt talab qilinadi?',
            answer: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
        }
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
                    {faqData.map((item, index) => (
                        <div key={index} className={styles.faq__content__list}>
                            <div className={styles.faq__content__list__question} onClick={() => handleToggle(index)}>
                                <h3 className={styles.faq__content__list__question__text}>{item.question}</h3>
                                <span className={styles.icon}>
                                    <Image
                                        src={up} 
                                        alt={openQuestionIndex === index ? 'up' : 'down'}
                                    />
                                </span>
                            </div>
                            {openQuestionIndex === index && ( 
                                <div className={styles.faq__content__list__answer}>
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </MyContainer>
        </section>
    )
}

export default Faq;