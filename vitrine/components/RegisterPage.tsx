import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent} from "my-lib-ui";
import React, {useState} from "react";
import {NextRouter, useRouter} from 'next/router';
import axios from "axios";

export default function RegisterPage() {

    const router: NextRouter = useRouter();

    const [typeUser, setTypeUser] = useState('entreprise');
    const [lastName, setLastName] = useState('');
    const [firstName, setFirstName] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [nationality, setNationality] = useState('français');
    const handleClick = () => {
        router.push('/confirm-register');
    };

    const handleSubmit = (event: { preventDefault: () => void; }) => {
        event.preventDefault();

        axios.post('http://localhost:8000/api/.user/inscription',
            {
                email,
                firstName,
                lastName,
                phoneNumber,
                nationality,
            }
        ).then((response) => {
            if (response.status === 200) {
                router.push('/confirm-register');
            } else {
                alert('Error');
            }
        });
    }

    return (
        <form method={'post'} onSubmit={handleSubmit}>
            <div className={styles.collage}>
                <div className={styles.fullwidth}>
                    <div>
                        <legend>Je suis :</legend>
                        <br/>
                        <div className="container-select-radio">
                            <RadioButtonComponent label={'Une entreprise'} value={'entreprise'} name={'person_type'}
                                                  onClick={() => {
                                                      setTypeUser('entreprise');
                                                  }} defaultChecked/>
                            <RadioButtonComponent label={'Un particulier'} value={'particulier'} name={'person_type'}
                                                  onClick={() => {
                                                      setTypeUser('particulier');
                                                  }}/>
                        </div>
                    </div>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Nom"} onChange={(event) => {
                        setLastName(event.currentTarget.value);
                    }} required/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Prénom"} onChange={(event) => {
                        setFirstName(event.currentTarget.value);
                    }} required/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Email"} type={'email'} onChange={(event) => {
                        setEmail(event.currentTarget.value);
                    }} required/>
                </div>
                <div className={styles.collageItem}>
                    <InputTextComponent label={"Numéro de téléphone"} type={'tel'} onChange={(event) => {
                        setPhoneNumber(event.currentTarget.value);
                    }} required/>
                </div>
                <div className={styles.collageItem}>
                    <SelectComponent placeholder={"Sélectionner une valeur"} label={'Nationalité'}
                                     onChange={(event) => {
                                         setNationality(event.currentTarget.value)
                                     }} required>
                        <option value="" disabled>Sélectionner une valeur</option>
                        <option value="Français">Français</option>
                        <option value="Anglais">Anglais</option>
                    </SelectComponent>
                </div>
                <div className={styles.fullwidth}>
                    <CheckboxComponent label={"J'atteste que je possède un permis de conduire valide"} required/>
                </div>
            </div>
            <div className={styles.buttonFlex}>
                <div className={styles.buttonFlexChild}>
                    <ButtonComponent type={"submit"} label={"Demander mon inscription"}/>
                </div>
            </div>
        </form>
    )
}
