import { DIRECTUS_API_URL } from '../../config';
import { useState, useEffect } from 'react';

export default function useDirectusCollection(path, id) {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                if(id) {
                    const response = await fetch(`${DIRECTUS_API_URL}/items/${path}/${id}`);
                    const json = await response.json();
                    setEntries(json.data);
                } else {
                    const response = await fetch(`${DIRECTUS_API_URL}/items/${path}`);
                    const json = await response.json();
                    setEntries(json.data);
                }

            } catch (error) {
                console.error('Error fetching timeline entries:', error);
            } finally {
                setLoading(false);
            }
        };
        fetchEntries();
    }, []);

    return { entries, loading };
}