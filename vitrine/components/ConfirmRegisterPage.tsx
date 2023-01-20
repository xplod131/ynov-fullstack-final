import React from "react";
import styles from '../styles/ConfirmRegister.module.css';
import Image from "next/image";
import Apple from '../img/Apple.png';
import Googleplay from '../img/GooglePlay.svg';

const ConfirmRegisterPage: React.FC = () => {

    return (
        <div className={styles.confirmContainer}>
            <p>Votre demande d’inscription a bien été prise en compte.<br /> Vous allez recevoir une confirmation par mail, en attendant vous pouvez télécharger l’application.</p>

            <div className={styles.box}>
                <Image src={Apple} className={styles.imageBoxApple} alt={'gfdgfd'}/>
                <Image src={Googleplay} className={styles.imageBoxGooglePlay} alt={'gfdgfd'}/>
            </div>

        </div>
    )

}

export default ConfirmRegisterPage;