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

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');
    const handleClickSubmit = (event: any) => {

        event.preventDefault();

        axios.post('http://localhost:8000/api/.car/add', {
            image,
            name,
            price: parseFloat(price)
        }, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`,
            }
        }).then((response) => {
            if(response.status === 200) {
                router.push('/admin')
            }
        });

    }


    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.center}>
                    <Link className={styles.backButton} href={'/admin'}>
                        <span className={styles.arrow}>←</span> retour
                    </Link>
                    <div>
                        <div className={styles.cardLogin}>
                            <h1 className={styles.loginText}>Voiture</h1>
                            <div className={styles.containerForm}>
                                <form method={"post"} onSubmit={handleClickSubmit}>
                                    <div className={styles.spaceItems}>
                                        <InputTextComponent label={'Image url'} onChange={(event) => {
                                            setImage(event.currentTarget.value)
                                        }
                                        }  type={'url'} required/>
                                    </div>
                                    <div className={styles.spaceItems}>
                                        <InputTextComponent label={'Name'} onChange={(event) => {
                                            setName(event.currentTarget.value)
                                        }
                                        }  type={'text'} required/>
                                    </div>
                                    <div className={styles.spaceItems}>
                                        <InputTextComponent label={'Price'} onChange={(event) => {
                                            setPrice(event.currentTarget.value)
                                        }
                                        }  type={'number'} required/>
                                    </div>
                                    <ButtonComponent type={'submit'} label={'Créer ce modèle'} />
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