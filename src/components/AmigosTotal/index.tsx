import axios from 'axios';
import React from 'react';
import { BASE_URL } from 'utils/requests';

interface IGet {
    id: number;
    name: string;
}

const defaultGet: IGet[] = [];

const AmigosTotal = () => {

    const [gets, setGets]: [IGet[], (gets: IGet[]) => void] = React.useState(defaultGet);
    const [error, setError]: [string, (error: string) => void] = React.useState("");

    React.useEffect(() => {
        axios.get(`${BASE_URL}/persons`)
            .then(response => {
                setGets(response.data);
            })
            .catch(ex => {
                const error = ex.response.status === 404 ? "Resource Not Found" : "An unexpected error fas occurred";
                setError(error);
            });
    }, []);

    return (
        <>
            {gets.map((item) => (
                <div className="col" key={item.id}>
                    <div className="card bg-secondary border-0 mb-2 text-center">
                        <div className="">
                            <img src={"https://orgut.s3.sa-east-1.amazonaws.com/pi"+item.id+".jpg"} alt="fotoPerfil" className="rounded mw-100 mx-auto red-image-total vh-80" />
                        </div>
                        <div className="card-footer p-1">
                            <p className="card-text altera-fontes">{error == null ? error : item.name}</p>
                            
                        </div>
                        
                    </div>
                </div>
            ))}
        </>
    )
}

export default AmigosTotal;