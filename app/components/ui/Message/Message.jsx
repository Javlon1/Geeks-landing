import styles from './Message.module.scss'
import { Context } from '../Context/Context';
import { useContext, useEffect } from 'react';


const Message = ({ messages, type }) => {
    const { message, setMessage } = useContext(Context);

    useEffect(() => {
        setTimeout(() => {
            setMessage(false);
        }, 4000);

    }, [message]);

    const messageClass = () => {
        switch (type) {
            case 'warning':
                return styles.messageWarning;
            case 'error':
                return styles.messageError;
            case 'success':
                return styles.messageSuccess;
            default:
                return '';
        }
    };

    return (
        <p className={`${styles.messag} ${message ? styles.messageAct : ''} ${messageClass()}`}>
            {messages}
        </p>
    )
}

export default Message;