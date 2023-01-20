import React, {useEffect, useState} from "react";
import styles from "../../styles/BackOffice.module.css";
import {ButtonComponent, ButtonTabComponent} from "my-lib-ui";
import Image from "next/image";
import validate from "../../img/validate.png";
import wait from "../../img/wait.png";
import axios from "axios";
import {useRouter} from "next/router";

const UserTable: React.FC = () => {

    const [futuresUsers, setFutureUsers] = useState([]);
    const [validatedUser, setValidatedUsers] = useState([]);

    const router = useRouter();

    useEffect(() => {

        axios.get('http://localhost:9000/api/.user/future-users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            setFutureUsers(response.data);
        })

        axios.get('http://localhost:9000/api/.user/users', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            console.log(response.data)
            setValidatedUsers(response.data);
        })

    }, []);
    const verifyUser = (id: number) => {
        router.push('/verify-user/' + id)
    }

    const editUser = (id: number) => {
        router.push('/update-user/' + id)
    }


    return (<div className={styles.containerTable}>
            <table>
                <thead>
                <tr>
                    <th>Statut</th>
                    <th>Nom / Prenom</th>
                    <th>Coordonées</th>
                    <th>Nationalité</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {futuresUsers.map(({firstName, id, lastName, nationality, phoneNumber}, key) => {
                    return (
                        <tr key={key}>
                            <td><Image src={wait} alt={'g'}/></td>
                            <td>{firstName + ' ' + lastName}</td>
                            <td>{phoneNumber}</td>
                            <td>{nationality}</td>
                            <td><ButtonComponent label={"Vérifier"} onClick={() => {
                                verifyUser(id)
                            }
                            }/></td>
                        </tr>
                    )
                })}
                {validatedUser.map(({firstName, id, lastName, nationality, phoneNumber}, key) => {
                    return (
                        <tr key={key}>
                            <td><Image src={validate} alt={'g'}/></td>
                            <td>{firstName + ' ' + lastName}</td>
                            <td>{phoneNumber}</td>
                            <td>{nationality}</td>
                            <td><ButtonComponent label={"Modifier"} onClick={() => {
                                editUser(id)
                            }
                            }/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default UserTable;