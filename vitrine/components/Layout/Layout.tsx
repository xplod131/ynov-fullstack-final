import React from "react";
import Header from "./Header";
import Footer from "./Footer";

type LayoutProps = {
    children: JSX.Element
}

const Layout: React.FC<LayoutProps> = ({ children }) => {

    return (
        <>
            <Header />
                {children}
            <Footer />
        </>
    )

}

export default Layout;