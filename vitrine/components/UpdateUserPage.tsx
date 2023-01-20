import React from "react";
import styles from '../styles/UpdateUser.module.css';
import { ButtonComponent, InputTextComponent, SelectComponent } from "my-lib-ui";
import { NextRouter, useRouter } from "next/router";

interface IUser {

    state: string;
    name: string;
    address: string;
    phone: string;
    email: string;
    nationality: string;
    action: boolean;

}
const UpdateUserPage: React.FC = () => {

    const router: NextRouter = useRouter();
    const user: IUser = {
        state: "validé",
        name: "karim",
        address: "5 rue des zeubs",
        email: "test@email.com",
        phone: "065555555",
        nationality: "francaise",
        action: true
    }

    const verifyUser = () => {
        console.log("user has been verified");
    }

    const handlePage = () => {
        router.push('/verify');
    }
    return (
        <div className={styles.containerPage}>
            <div className={styles.containerModalUpdateUser}>
                <h1 className={styles.title}>Modifier l'utilisateur</h1>
                <div className={styles.input}>
                    <InputTextComponent label={'Nom'} />
                </div>
                <div className={styles.input}>
                    <InputTextComponent label={'Prénom'} />
                </div>
                <div className={styles.input}>
                    <InputTextComponent label={'Email'} />
                </div>
                <div className={styles.input}>
                    <InputTextComponent label={'Numéro de téléphone'} />
                </div>
                <div className={styles.input}>
                    <SelectComponent placeholder={"Sélectionner une valeur"} label={'Nationalité'}>
                        <option value="" defaultChecked>Sélectionner une valeur</option>
                    </SelectComponent>
                </div>

                <div className={styles.actionButton}>
                    <div className={styles.button}>
                        <ButtonComponent label={'Enregister les modification'} onClick={verifyUser}></ButtonComponent>
                    </div>
                    <div className={styles.button}>
                        <ButtonComponent label={'Supprimer utilisateur'} onClick={verifyUser}></ButtonComponent>
                    </div>
                    <div className={styles.cancel} onClick={() => {
                    router.push('/admin')}
                    } >Annuler</div>
                </div>


            </div>
        </div>
    )

}

export default UpdateUserPage;