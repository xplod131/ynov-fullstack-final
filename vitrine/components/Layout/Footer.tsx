import React from "react";
import styles from '../../styles/Footer.module.css'

const Footer: React.FC = () => {

    const year: number = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.containerLinks}>
                    <a>Contact</a>
                    <a>Conditions genérales pdf</a>
                </div>
                <div className={styles.containerDroit}>
                    <p>RIDE {year} - Tous droits reservés</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;