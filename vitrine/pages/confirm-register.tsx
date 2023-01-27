import React from "react";
import IndexPage from "../components/IndexPage";
import ConfirmRegisterPage from "../components/ConfirmRegisterPage";

const Page: React.FC = () => {

    return (
        <IndexPage>
            <ConfirmRegisterPage />
        </IndexPage>
    )
}

export default Page;