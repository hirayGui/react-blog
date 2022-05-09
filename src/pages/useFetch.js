import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        setTimetout(() => {
            fetch(url, {signal: abortCont.signal})
            .then(res => {
                if(!res.ok){
                    throw Error('Erro ao buscar dados para este recurso');
                }
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch((err) => {
                if(err.name === 'AbortError'){
                    console.log("Busca abortada");
                }else{
                    setError(err.message);
                    setIsPending(false);
                }
            })
        }, 5);

        return () => abortCont.abort();
    }, [url]);

    return {data, isPending, error};
}

export default useFetch