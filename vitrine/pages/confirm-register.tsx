import React from "react";
import { NextRouter, useRouter } from 'next/router';
import IndexPage from "../components/IndexPage";
import RegisterPage from "../components/RegisterPage";
import ConfirmRegisterPage from "../components/ConfirmRegisterPage";

const Page: React.FC = () => {

    return (
        <IndexPage>
            <ConfirmRegisterPage />
        </IndexPage>
    )
}

export default Page;