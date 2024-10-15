import { createContext, useEffect, useState } from 'react'
const Context = createContext()

function Provider({ children }) {
    const [url] = useState("https://810967953e08bb234c3b342dc98cad47.serveo.net/api");
    const [close, setClose] = useState(false);
    const [infoModal, setInfoModal] = useState(false);
    const [registerModal, setRegisterModal] = useState(false);
    const [act, setAct] = useState(true);
    const [message, setMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [messageText, setMessageText] = useState('');
    const [coursesId, setCoursesId] = useState(0);

    return (
        <Context.Provider value={{
            url,
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