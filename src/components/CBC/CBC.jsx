import axios from 'axios';
import React, {useContext, useState} from 'react';
import { UserContext } from '../../UserContext';

const CBC = () => {
    const { user } = useContext(UserContext);
    
    const [values, setValues] = useState({
        Rbc: '',
        Hb: '',
        Hct: '',
        MCV: '',
        MCH: '',
        MCHC: '',
        RDW: '',
        WBC: '',
        Neu: '',
        Lym: '',
        Mon: '',
        Eos: '',
        Bas: '',
        Plt: ''
    })


    const handleChange = (event) => {
        setCBCValues(prevState = ({
            ...prevState,
            [event.target.name]: parseFloat(event.target.value) 
        }))
    }

    const handleSubmit = async () => {
        const URL = `https://localhost:44394/api/CBC/${user.id}`
        try {
            let response = await axios.post(URL,values);
            console.log(response.data);
        } catch (e) {
            console.log("Error CBC POST: ", e);
        }
    }


    
    return ( 

    );
}
 
export default CBC;