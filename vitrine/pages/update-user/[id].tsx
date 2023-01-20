import React, {useEffect} from "react";
import UpdateUserPage from "../../components/UpdateUserPage";
import useLoggedUser from "../../hooks/useLoggedUser";
import {useRouter} from "next/router";

const id: React.FC = () => {

    const {isLogged, isAdmin} = useLoggedUser();

    const router = useRouter();

    const {id} = router.query;

    useEffect(() => {

        if(!isLogged && !isAdmin) {
            router.push('/login');
        }

    }, [isLogged, isAdmin]);

    return (
        <UpdateUserPage />
    )
}

export default id;