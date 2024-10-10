import Layout from "@/app/components/layout/Layout";
import '@/app/assets/globals.scss';
import { Provider } from "@/app/components/ui/Context/Context";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const myApp = ({ Component, pageProps }) => {
    useEffect(() => {
        AOS.init({
            duration: 800, once: false
        })
    }, [])
    // 
    // useEffect(() => {
    //     const handleContextMenu = (e) => {
    //         e.preventDefault();
    //     };

    //     const handleKeyDown = (e) => {
    //         if (e.keyCode === 123) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'I'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'C'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.shiftKey && e.keyCode === 'J'.charCodeAt(0)) {
    //             e.preventDefault();
    //         } else if (e.ctrlKey && e.keyCode === 'U'.charCodeAt(0)) {
    //             e.preventDefault();
    //         }
    //     };

    //     document.addEventListener('contextmenu', handleContextMenu);
    //     document.addEventListener('keydown', handleKeyDown);

    //     return () => {
    //         document.removeEventListener('contextmenu', handleContextMenu);
    //         document.removeEventListener('keydown', handleKeyDown);
    //     };
    // }, []);
    //

    return (
        <Provider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </Provider>
    )
}

export default myApp;