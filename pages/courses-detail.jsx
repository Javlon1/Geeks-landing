import Head from 'next/head'
import Intro from '@/app/components/screens/CoursesDetail/Intro/Intro';
import Faq from '@/app/components/screens/CoursesDetail/Faq/Faq';
import Contact from '@/app/components/screens/CoursesDetail/Contact/Contact';
import Course from '@/app/components/screens/CoursesDetail/Course/Course';
import ForWho from '@/app/components/screens/CoursesDetail/ForWho/ForWho';

const CoursesDetail = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.svg" />
                <meta name="description" content="" /> // Описание страницы
                <meta name="keywords" content="" /> // ключевые слова, страницы
                <meta name="image_src" content="" /> // URL для img

                <meta property="og:title" content="CoursesDetail" /> // Название страницы
                <meta property="og:description" content="" /> // Описание страницы
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>CoursesDetail</title>
            </Head>

            <Intro />
            <ForWho />
            <Faq />
            <Course />
            <Contact />
        </>
    )
}

export default CoursesDetail;