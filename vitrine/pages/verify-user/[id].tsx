import React, {useEffect, useState} from "react";
import VerifyUserPage from "../../components/VerifyUserPage";
import {useRouter} from "next/router";
import useLoggedUser from "../../hooks/useLoggedUser";
import axios from "axios/index";


const id: React.FC = () => {

    const {isLogged, isAdmin} = useLoggedUser();

    const router = useRouter();


    useEffect(() => {

        if(!isLogged && !isAdmin) {
            router.push('/login');
        }

    }, [isLogged, isAdmin]);

    return (
        <VerifyUserPage />
    )
}

export default id;