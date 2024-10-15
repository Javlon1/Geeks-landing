import styles from './Layout.module.scss';
import Header from './header/Header';
import ScrollUp from '../ui/scrollUp/scrollUp';
import Footer from './Footer/Footer';
import Message from '../ui/Message/Message';
import { useContext } from 'react';
import { Context } from '../ui/Context/Context';

const Layout = ({ children }) => {
    const { messageType, messageText } = useContext(Context);

    
    return (
        <div>
            <main className={styles.layout}>
                <Header />
                <Message messages={messageText} type={messageType} />
                {children}
                <Footer />
                <ScrollUp />
            </main>
        </div>
    )
}

export default Layout;