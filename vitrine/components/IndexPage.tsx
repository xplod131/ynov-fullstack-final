import Image from 'next/image'
import styles from '../styles/Home.module.css';
import HeaderCars from '../img/HeaderCars.png';
import {InputTextComponent, RadioButtonComponent, SelectComponent, CheckboxComponent, ButtonComponent} from "my-lib-ui";
import React from "react";
import {NextRouter, useRouter} from 'next/router';
import ConfirmRegisterPage from "./ConfirmRegisterPage";

type IndexPageProps = {
    children: JSX.Element
}

const IndexPage: React.FC<IndexPageProps> = (props) => {

    const router: NextRouter = useRouter();

    const {children} = props;

    const handleClick = () => {
        router.push('/');
    };

    return (
        <div className={styles.container}>

            <div className={styles.imageCars}>

                <Image className={styles.img} src={HeaderCars} alt={'g'}/>

                <div className={styles.containerText}>
                    <div className={styles.Text}>
                        <span className={styles.arrow}>▷</span> Depuis 2008, RIDE, agence de location de
                        voitures de luxe propose ses services partout en France (Paris, Monaco, Nice, Cannes,
                        Saint-Tropez, Courchevel, Saint-Moritz...). Notre expérience est à votre service pour
                        répondre à toutes vos demandes
                    </div>
                </div>

            </div>

            <div className={styles.containerInput}>
                <div className={styles.containerInputBox}>
                    <h2 className={styles.titleInscription}>Inscription</h2>
                    {children}
                </div>
            </div>
        </div>

    )
}

export default IndexPage;