import React, {useEffect, useState} from "react";
import styles from '../styles/VerifyUser.module.css';
import {ButtonComponent} from "my-lib-ui";
import {NextRouter, useRouter} from "next/router";
import axios from "axios";

interface IUser {

    state: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    nationality: string;
    action: boolean;

}

const VerifyUserPage: React.FC = () => {

    const router = useRouter();

    const {id} = router.query;

    // @ts-ignore
    const [{email, firstName, lastName, nationality, phoneNumber
    }, setFutureUser]: [{}, ((value: (((prevState: {}) => {}) | {})) => void)] = useState({});

    useEffect(() => {

        axios.get('http://localhost:9000/api/.user/future-users/' + id, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            if (response.status === 200) {
                setFutureUser(response.data);

            } else {
                router.push('/admin');
            }
        })

    }, [router])

    const verifyUser = () => {
        axios.post('http://localhost:9000/api/.user/validate-user/' + id, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            router.push('/admin')
        })

    }

    const handlePage = () => {
        router.push('/verify');
    }
    return (
        <div className={styles.containerPage}>
            <div className={styles.containerModalVerifyUser}>
                <div className={styles.firstBlock}>
                    <h1 className={styles.title}>Vérifier l'utilisateur</h1>
                    <div className={styles.infoUserBlock}>
                        <div className={styles.categoryInfoUser}>
                            Nom / Prénom
                        </div>
                        <div className={styles.infoUser}>
                            <p>{lastName} {firstName}</p>
                        </div>
                        <div className={styles.categoryInfoUser}>
                            Coordonées
                        </div>
                        <div className={styles.infoUser}>
                            <p>{email}</p>
                            <p>{phoneNumber}</p>
                        </div>
                        <div className={styles.categoryInfoUser}>
                            Nationalité
                        </div>
                        <div className={styles.infoUser}>
                            <p>{nationality}</p>

                        </div>

                    </div>

                </div>
                <div className={styles.endblock}>
                    <div className={styles.actionButton}>
                        <ButtonComponent label={"Vérifier l'utilisateur"} onClick={verifyUser}></ButtonComponent>
                    </div>
                    <div className={styles.actionButton}>
                        <ButtonComponent label={"Supprimer l'utilisateur"} onClick={verifyUser}></ButtonComponent>
                    </div>

                    <span className={styles.cancel}>Annuler</span>
                </div>
            </div>
        </div>
    )

}

export default VerifyUserPage;