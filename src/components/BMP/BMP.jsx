import React, {useState} from 'react';

const BMP = () => {

    const { user } = useContext(UserContext);

    const [bmpValues, setBMPValues] = useState({
        Sodium: '',
        Potassium: '',
        Glucose: '',
        Calcium: '',
        Chloride: '',
        Bicarbonate: '',
        Creatinine: '',
        BUN: ''
    })

    const handleChange = (event) => {
        setBMPValues(prevState => ({
            ...prevState,
            [event.target.name]: parseFloat(event.target.value)
        }))
    }

    const handleSubmit = async () => {
        const URL = `https://localhost:44394/api/BMP/${user.id}`
        try {
            let response = await axios.post(URL,values);
            console.log(response.data);
        } catch (e) {
            console.log("Error BMP POST: ", e);
        }
    }
    
    return ( 

     );
}
 
export default BMP;