import Link from 'next/link'
import Image from 'next/image'
import styles from './RegisterModal.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useState } from 'react';
import close from '../../../../../public/img/svg/X.svg';

const RegisterModal = () => {
    const { registerModal, setRegisterModal, act, setAct } = useContext(Context);
    const [formData, setFormData] = useState({ name: '', courses: 0, age: "", phone: '' });
    const [focused, setFocused] = useState({ name: false, age: false, phone: false });

    const formatPhoneNumber = (number) => {
        let newValue = number.replace(/\D/g, '');

        if (!newValue.startsWith('998')) {
            newValue = '998' + newValue;
        }

        if (newValue.length > 12) {
            newValue = newValue.slice(0, 12);
        }

        if (newValue.length > 3) newValue = newValue.replace(/^(\d{3})(\d+)/, '$1 $2');
        if (newValue.length > 6) newValue = newValue.replace(/^(\d{3}) (\d{2})(\d+)/, '$1 $2 $3');
        if (newValue.length > 9) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3})(\d+)/, '$1 $2 $3 $4');
        if (newValue.length > 11) newValue = newValue.replace(/^(\d{3}) (\d{2}) (\d{3}) (\d{2})(\d+)/, '$1 $2 $3 $4 $5');

        return newValue.trim();
    };

    const handleChange = (e) => {
        const { id, value } = e.target;

        if (id === 'phone') {
            const formattedPhone = formatPhoneNumber(value);
            setFormData({ ...formData, [id]: formattedPhone });
        } else {
            setFormData({ ...formData, [id]: value });
        }
    };


    const handleFocus = (e) => {
        const { id } = e.target;
        setFocused({ ...focused, [id]: true });
    };

    const handleBlur = (e) => {
        const { id } = e.target;
        if (!formData[id]) {
            setFocused({ ...focused, [id]: false });
        }
    };

    console.log(formData);

    return (
        <>
            {
                registerModal &&
                <div className={styles.registerModal}>
                    <MyContainer>
                        <div className={styles.registerModal__content}>
                            <span
                                className={styles.registerModal__content__close}
                                onClick={() => {
                                    setRegisterModal(false)
                                    setAct(true)
                                }}
                            >
                                <Image
                                    src={close}
                                    alt='close'
                                />
                            </span>
                            <h2 className={styles.registerModal__content__title}>Ro’yhatdan o’ting</h2>
                            <form className={styles.form}>
                                {
                                    act &&
                                    <div className={styles.inputContainer}>
                                        <select required defaultValue={formData.name} onChange={handleChange} id="courses" name="courses">
                                            <option disabled value="">Yowqew wqe</option>
                                            <option value="1">23123 wqe</option>
                                            <option value="2">yow312312qew wqe</option>
                                            <option value="3">yowqe222w wqe</option>
                                            <option value="4">yowq32122ew wqe</option>
                                        </select>
                                    </div>
                                }
                                <div className={styles.inputContainer}>
                                    <input
                                        type="text"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label
                                        htmlFor="name"
                                        className={`${styles.placeholder} ${focused.name || formData.name ? styles.active : ''}`}
                                    >
                                        Ismingizni
                                    </label>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        type="number"
                                        id="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label
                                        htmlFor="age"
                                        className={`${styles.placeholder} ${focused.age || formData.age ? styles.active : ''}`}
                                    >
                                        Yoshingiz
                                    </label>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input
                                        type="text"
                                        id="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={handleFocus}
                                        onBlur={handleBlur}
                                        required
                                    />
                                    <label
                                        htmlFor="phone"
                                        className={`${styles.placeholder} ${focused.phone || formData.phone ? styles.active : ''}`}
                                    >
                                        Telefon raqamingizni
                                    </label>
                                </div>
                                <button type="submit" className={styles.submitButton}>Joy band qilish</button>
                            </form>
                        </div>
                    </MyContainer>
                </div>
            }
        </>
    )
}

export default RegisterModal;