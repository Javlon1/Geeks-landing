import Image from 'next/image'
import styles from './RegisterModal.module.scss'
import { Context } from '@/app/components/ui/Context/Context';
import MyContainer from '@/app/components/ui/MyContainer/MyContainer'
import { useContext, useEffect, useState } from 'react';
import close from '../../../../../public/img/svg/X.svg';

const RegisterModal = () => {
    const {
        url,
        act,
        setAct,
        infoModal,
        coursesId,
        setMessage,
        setCoursesId,
        registerModal,
        setMessageType,
        setMessageText,
        setRegisterModal,
    } = useContext(Context);
    const [formData, setFormData] = useState({ name: '', courses: '', age: "", phone: '' });
    const [focused, setFocused] = useState({ name: false, age: false, phone: false });
    const [loader, setLoader] = useState(true)
    const [loaderForm, setLoaderForm] = useState(false)
    const [coursesData, setCoursesData] = useState([]);

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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const fullUrl = `${url}/leads/`;

        if (formData.phone.replace(/\s/g, '').length === 12) {
            setLoaderForm(true)

            try {
                const response = await fetch(fullUrl, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        course: formData.courses ? formData.courses : coursesId,
                        first_name: formData.name,
                        age: formData.age,
                        phone_number: formData.phone.replace(/\s/g, ''),
                    }),
                });

                const data = await response.json();

                console.log(data);

                if (data.message.status === 'success') {
                    setMessage(true);
                    setMessageType(data.message.status);
                    setMessageText(data.message.text);
                    setLoaderForm(false)

                    setFormData({ name: '', courses: '', age: "", phone: '' });
                    setCoursesId(0)
                    setRegisterModal(false)

                } else {
                    setMessage(true);
                    setMessageType(data.message.status);
                    setMessageText(data.message.text);
                }
            } catch (error) {
                console.error('Error during POST request:', error);
                setMessage(true);
                setMessageType('error');
                setMessageText(error.message);
            } finally {
                setLoader(false);
            }
        } else {
            setMessage(true);
            setMessageType('warning');
            setMessageText('Telefon raqamingizni to\'g\'ri kiriting!');
        }
    };

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
                            <form onSubmit={handleSubmit} className={styles.form}>
                                {
                                    act &&
                                    <label className={styles.inputContainer}>
                                        <select required defaultValue={formData.name} onChange={handleChange} id="courses">
                                            <option disabled value="">Yo'nalishni tanlang</option>
                                            {
                                                !loader ? (
                                                    coursesData?.map((item, key) => (
                                                        <option key={key} value={item.id}>{item.title}</option>
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
                                        </select>
                                    </label>
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
                                {
                                    loaderForm ? (
                                        <div className={styles.load__btn}>
                                            <span className={styles.load__btn__loader}></span>
                                        </div>
                                    ) : (
                                        <button type="submit" className={styles.submitButton}>Joy band qilish</button>
                                    )
                                }
                            </form>
                        </div>
                    </MyContainer>
                </div>
            }
        </>
    )
}

export default RegisterModal;