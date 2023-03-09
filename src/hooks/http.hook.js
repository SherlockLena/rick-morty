import { useCallback, useState } from "react"

export const useHttp = () => {
    const [error, setError] = useState(false);

    const request = useCallback(async(url, method = 'GET', body = null, headers={'Content-Type':'application/json'}) => {

        try {
            const res = await fetch(url, {method, body, headers});
            if (!res.ok) {
                setError(true);
                throw new Error(`Could not fetch ${url}, status: ${res.status}`);
            }
            const data = await res.json();
            return data;
        } catch(e) {
            setError(true);
            throw e;
        }
    }, []);

    const clearError = useCallback(() => {
        setError(false);
    }, []);

    return {request, clearError, error};
}