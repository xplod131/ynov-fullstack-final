import React, {useEffect, useState} from "react";
import styles from '../styles/Login.module.css';
import { ButtonComponent, InputPasswordComponent, InputTextComponent } from "my-lib-ui";
import Link from "next/link";
import axios from "axios";
import jwt_decode from "jwt-decode";
import {useRouter} from "next/router";
import useLoggedUser from '../hooks/useLoggedUser';
const Login: React.FC = () => {

    const router = useRouter();

    // @ts-ignore
    const {isLogged, isAdmin} = useLoggedUser()

    useEffect(() => {

        console.log(isLogged)

        if(isLogged && isAdmin) {
            router.push('/admin')
        }

    }, [isLogged, isAdmin])

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleClickSubmit = (event: any) => {

        event.preventDefault();

        axios.post('http://localhost:9000/api/.user/login', {
            username: email,
            password
        }).then((response) => {

            if(response.status === 200) {

                if(response.data?.token){

                    const decoded: object = jwt_decode(response.data.token);

                    // @ts-ignore
                    if (!decoded?.roles.includes('ROLE_ADMIN')) {
                        router.push('/');
                    } else {
                        localStorage.setItem('token', response.data.token);
                        router.push('/admin')
                    }

                } else {

                    if(response.data?.message) {
                        alert(response.data.message)
                    }

                }

            }

        });

    }


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.center}>
                    <Link className={styles.backButton} href={'/'}>
                        <span className={styles.arrow}>←</span> retour
                    </Link>
                    <div>
                        <div className={styles.cardLogin}>
                            <h1 className={styles.loginText}>Connexion</h1>
                            <div className={styles.containerForm}>
                                <form method={"post"} onSubmit={handleClickSubmit}>
                                    <div className={styles.spaceItems}>
                                        <InputTextComponent label={'Identifiant'} onChange={(event) => {
                                            setEmail(event.currentTarget.value)
                                            //setEmail()
                                        }
                                        }  type={'email'} required/>
                                    </div>
                                    <div className={styles.spaceItems}>
                                        <InputPasswordComponent label={'Mot de passe'} onChange={(event) => {
                                            setPassword(event.currentTarget.value)
                                        }
                                        } name={'password'} minLength={1} required/>
                                    </div>
                                    <ButtonComponent type={'submit'} label={'Connexion'} />
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login;