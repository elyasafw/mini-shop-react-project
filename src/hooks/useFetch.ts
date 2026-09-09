import { useEffect, useState } from "react";

type State<T> = {
    data: T | null;
    loading: boolean;
    error: string | null;
};

export const API = "https://fakestoreapi.com/products";

const useFetch = <T>(api: string): State<T> => {
    const [state, setState] = useState<State<T>>({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                setState({ data: null, loading: true, error: null });

                const res = await fetch(api);

                if (!res.ok) {
                    setState({
                        ...state,
                        loading: false,
                        error: "failed to get data ..",
                    });
                }

                const products: T = await res.json();
                setState({ ...state, loading: false, data: products });
            } catch (error: any) {
                setState({
                    ...state,
                    loading: false,
                    error: "Unexpected error",
                });
            }
        };
        fetchData();
    }, [api]);
    return { ...state };
};

export default useFetch;
