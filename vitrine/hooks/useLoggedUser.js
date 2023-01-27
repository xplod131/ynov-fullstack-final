import {useEffect} from "react";
import jwt_decode from "jwt-decode";
import {useRouter} from "next/router";

const useLoggedUser = () => {

    const router = useRouter();

    let decoded;

    if (typeof window !== 'undefined') {

        const token = localStorage.getItem('token');

        if(token) {
            decoded = jwt_decode(token);
            if(Date.now() >= decoded.exp * 1000) {
                localStorage.removeItem('token');
            }
        } else {
            localStorage.removeItem('token');

        }

    }



    useEffect(() => {

        const token = localStorage.getItem('token');

        if(token) {
            decoded = jwt_decode(token);
            if(Date.now() >= decoded.exp * 1000) {
                localStorage.removeItem('token');
            }
        } else {
            localStorage.removeItem('token');
        }
    }, []);

    if(decoded) {
        return {
            isLogged: true,
            isAdmin: decoded.roles.includes('ROLE_ADMIN'),
            email: decoded.email,
        }
    }

    return {
        isLogged: false,
        isAdmin: false,
        email: '',
    }
}

export default useLoggedUser;