import axios from 'axios';
import React from 'react';
import { BASE_URL } from 'utils/requests';

interface IGet {
    id: number;
    totalElements: number
}

const defaultGet: IGet[] = [];

const AmigosQuantidade = () => {

    const [gets, setGets]: [IGet[], (gets: IGet[]) => void] = React.useState(defaultGet);

    React.useEffect(() => {
        axios.get(`${BASE_URL}/communities/page`)
            .then(response => {
                setGets(response.data.totalElements);
            })
    }, []);

    return (
        <>
            <span>{gets}</span>
        </>
    )
}

export default AmigosQuantidade;