import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("http://192.168.166.253:8000/api");
    const [close, setClose] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [act, setAct] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [messageText, setMessageText] = useState('');
    const [coursesId, setCoursesId] = useState(0);

    const [lan, setLan] = useState(() => {
        const storedLanguage = typeof window !== 'undefined' ? window.localStorage.getItem('lan') : null;
        return storedLanguage ? storedLanguage : 'ru';
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('lan', lan);
        }
    }, [lan]);

    return (
        <Context.Provider value={{
            url,
            lan, setLan,
            act, setAct,
            close, setClose,
            message, setMessage,
            coursesId, setCoursesId,
            infoModal, setInfoModal,
            messageText, setMessageText,
            messageType, setMessageType,
            registerModal, setRegisterModal,

        }}>
            {children}
        </Context.Provider>
    )
}

export { Context, Provider }