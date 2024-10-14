import NotFound from '@/app/components/ui/NotFound/404';
import Head from 'next/head';

const PageNotFound = () => {

    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
                <title>Page Not Found</title>
            </Head>
            <div>
                <NotFound />
            </div>
        </>
    )
}
export const getServerSideProps = async (context) => {
    return {
        notFound: true,
    };
};

export default PageNotFound; 