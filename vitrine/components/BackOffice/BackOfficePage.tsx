import React, {useState} from "react";
import styles from '../../styles/BackOffice.module.css';
import {ButtonTabComponent, ButtonComponent} from "my-lib-ui";
import {NextRouter, useRouter} from "next/router";
import wait from './../../img/wait.png';
import validate from './../../img/validate.png';
import Image from 'next/image'
import UserTable from "./UserTable";
import VehicleTable from "./VehicleTable";
import {set} from "immutable";

const BackofficePage: React.FC = () => {

    const [section, setSection] = useState('users');

    return (
        <div className={styles.containerTab}>
            <div className={styles.container}>
                <h1 className={styles.title}>Gestion back office</h1>
                <div className={styles.containerNavigationBackOffice}>
                    <ButtonTabComponent label={"Liste des utilisateurs inscrits"} onClick={() => {
                        setSection('users');
                    }}/>
                    <ButtonTabComponent label={"Liste des véhicles"} onClick={() => {
                        setSection('vehicles')
                    }
                    }/>
                </div>
                {section === 'users' && <UserTable/>}
                {section === 'vehicles' && <VehicleTable/>}
            </div>

        </div>
    )
}

export default BackofficePage;