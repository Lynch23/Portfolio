import { useState, useEffect } from "react";
import fetchQuestions from "../API";


const initialState = {
    response_code : 0,
    results : []
}
const initialSettings = {
    category : "9",
    level : "medium"
}


function useFetch() {

    const [state, setState] = useState(initialState);
    const [settings, setSettings] = useState(initialSettings);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const fetchData = async (parameters, callbac) => {
        try {
            setLoading(true);
            setError(false);
            const data  = await callbac(parameters);
            setState(data);
        }
        catch(err) {
            setError(true);
            console.log(err);
        }
        setLoading(false);
    }


    useEffect(() => {
        setState(initialState);
        fetchData(settings, fetchQuestions);
    }, [settings]);

    return { state, loading, error, settings, setLoading, setState, setError, setSettings }
}
export default useFetch;