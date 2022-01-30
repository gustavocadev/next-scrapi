import Head from "next/head";
import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
    children: ReactNode;
    page: string;
}

export default function Layout({ children, page, guitar }: LayoutProps) {
    return (
        <>
            <Head>
                <title>Guitar LA - {page}</title>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="true"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,400;1,700;1,900&display=swap"
                    rel="stylesheet"
                />
            </Head>

            <Header guitar={guitar} />
            {children}
            <Footer />
        </>
    );
}

Layout.defaultProps = {
    guitar: null,
};
