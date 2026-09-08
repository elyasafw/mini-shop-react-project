import { useEffect, useState } from "react";

type Response<T> = {
    data: T;
    loading: boolean;
    error: string;
    setData: () => void;
};

export const API = "https://fakestoreapi.com/products";

const useFetch = <T>(api: string): Response<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                setError(null);

                const res = await fetch(api);

                if (!res.ok) {
                    setError("failed to get data ..");
                }
                const products: T = await res.json();
                setData(products);
            } catch (error: any) {
                setError("Unexpected error");
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [api]);
    return { data, loading, error, setData } as Response<T>;
};

export default useFetch;
