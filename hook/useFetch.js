// import { BASE_URL } from '@env';
import axios  from 'axios'
import {useState, useEffect} from 'react'

const useFetch = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.get(`${process.env.BASE_URL}/api/products/`);
            setData(response.data);
            setLoading(false);            
        } catch (error) {
            setError(error);
            setLoading(false);            
        }
    }

    useEffect(() => {
        fetchData();
        // console.warn(process.env.BASE_URL)
    }, [])
    
    const reFetch = () => {
        setLoading(true);
        fetchData();
    }

    return {data, loading, error, reFetch}
}

export default useFetch