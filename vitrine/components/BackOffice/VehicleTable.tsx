import React, {useEffect, useState} from "react";
import styles from "../../styles/BackOffice.module.css";
import {ButtonComponent, ButtonTabComponent} from "my-lib-ui";
import Image from "next/image";
import validate from "../../img/validate.png";
import wait from "../../img/wait.png";
import axios from "axios";
import {useRouter} from "next/router";

const VehicleTable: React.FC = () => {

    const [vehicles, setVehicles] = useState([]);

    const router = useRouter();

    const handleAddCar = () => {
        router.push('/add-car');
    }

    const handleDeleteCar = (id: number) => {
        axios.post('http://localhost:8000/api/.car/delete/' + id,{}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then(() => {
            actualizeVehicles();
        });
    }

    const actualizeVehicles = () => {
        axios.get('http://localhost:8000/api/.car', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        }).then((response) => {
            setVehicles(response.data.car);
        })
    }

    useEffect(() => {
        actualizeVehicles();
    }, []);

    return (
        <>
            <ButtonComponent label={"Ajouter un nouveau véhicule"}
                             onClick={handleAddCar}/>

            <div className={styles.containerTable}>
                <table>
                    <thead>
                    <tr>
                        <th>Image</th>
                        <th>Marque</th>
                        <th>Prix</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {vehicles.map((vehicle, key) => {
                        return (
                            <tr key={key}>
                                <td><img src={vehicle.image} alt={"Vehicle image"} width={50} height={50} /></td>
                                <td className={styles.tdBrand}>{vehicle.name}</td>
                                <td className={styles.tdBrand}>{vehicle.price}</td>
                                <td><ButtonComponent label={"Supprimer"}
                                                     onClick={() => {
                                                         handleDeleteCar(vehicle.id)
                                                     }}/></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </>

    )
}

export default VehicleTable;