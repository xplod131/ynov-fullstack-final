import React from "react";
import styles from "../../styles/BackOffice.module.css";
import {ButtonComponent, ButtonTabComponent} from "my-lib-ui";
import Image from "next/image";
import validate from "../../img/validate.png";
import wait from "../../img/wait.png";

const VehicleTable: React.FC = () => {

    interface IVehicle {
        brand: string,
        model: string,
        action: boolean
    }

    const vehicles: IVehicle[] = [
        {
            brand: "dacia",
            model: "duster",
            action: true

        },
        {
            brand: "renault",
            model: "clio",
            action: false

        }
    ]


    const verifyUser = () => {
        console.log('user verified')
    }

    const editUser = () => {
        console.log("edit user")
    }


    return (
        <div className={styles.containerTable}>
            <table>
                <thead>
                <tr>
                    <th>Marque</th>
                    <th>Modele</th>
                    <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {vehicles.map((vehicle, key) => {
                    return (
                        <tr key={key}>
                            <td>{vehicle.brand}</td>
                            <td className={styles.tdBrand}>{vehicle.model}</td>
                            <td><ButtonComponent label={vehicle.action ? "modele" : "vérifier"}
                                                 onClick={vehicle.action ? editUser : verifyUser}/></td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default VehicleTable;