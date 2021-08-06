// write your custom hook here to control your checkout form
import { useState } from "react";

const useForm = (init)=>{
    //using the states that will be used
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [values, setValues] = useState(init);

    const handlechanges = e => {
        setValues({
            ...values,
            [e.target.name]:e.target.value
        })
    }
    
    const handleSubmit = e =>{
        e.preventDefault();
        setShowSuccessMessage(true);
    }
    return [showSuccessMessage,values,handlechanges,handleSubmit]
}
export default useForm;