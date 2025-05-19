import { DIRECTUS_API_URL } from '../../config';
import { useState, useEffect } from 'react';

export default function useTimelineEntries() {
    const [entries, setEntries] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchEntries = async () => {
            try {
                const response = await fetch(`${DIRECTUS_API_URL}/items/timelines`);
                const json = await response.json();
                console.log('Raw JSON response:', json);
                setEntries(json.data);

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