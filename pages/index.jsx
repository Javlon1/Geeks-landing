import * as React from 'react'
import Head from 'next/head'
import Intro from '@/app/components/screens/home/Intro/Intro';
import About from '@/app/components/screens/home/About/About';
import Courses from '@/app/components/screens/home/Courses/Courses';
import Communication from '@/app/components/screens/home/Сommunication/Communication';
import Statistics from '@/app/components/screens/home/Statistics/Statistics';
import Faq from '@/app/components/screens/home/Faq/Faq';
import Dino from '@/app/components/screens/home/Dino/Dino';
import Contact from '@/app/components/screens/home/Contact/Contact';


const Index = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="GEEKS - учебный центр для будущих IT-специалистов. Современные курсы программирования, data science и digital marketing." />
                <meta name="keywords" content="GEEKS, IT-курсы, программирование, digital marketing, data science, веб-разработка" />
                <meta name="image_src" content='' /> // URL для img
                <link rel="canonical" href="https://geeks-landing.vercel.app/" />

                <meta property="og:title" content="GEEKS - Учебный центр для будущих IT-профессионалов" />
                <meta property="og:description" content="Изучи востребованные навыки программирования и начни карьеру в IT c GEEKS!" />
                <meta property="og:image" content="" /> // URL для img: https://example.com/image.jpg
                <meta property="og:url" content="" /> // оснавное URL: https://example.com/page-url
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="GEEKS" /> // Название сайта
                <meta property="og:locale" content="ru_RU" />

                <title>GEEKS Andijan</title>
            </Head>

            <Intro />
            <About />
            <Courses />
            <Communication />
            <Statistics />
            <Faq />
            <Contact />
            <Dino />
        </>
    )
}

export default Index;