import React, { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const EVENT = 'portfolio:toast';

// Copies text and pops a small toast instead of a browser alert().
export function copyWithToast(text, message) {
    navigator.clipboard.writeText(text).then(
        () => window.dispatchEvent(new CustomEvent(EVENT, { detail: message })),
        (err) => console.error('Failed to copy: ', err)
    );
}

function Toast() {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        let timer;
        const show = (e) => {
            setMessage(e.detail);
            clearTimeout(timer);
            timer = setTimeout(() => setMessage(null), 2200);
        };
        window.addEventListener(EVENT, show);
        return () => {
            window.removeEventListener(EVENT, show);
            clearTimeout(timer);
        };
    }, []);

    return (
        <AnimatePresence>
            {message && (
                <motion.div
                    role="status"
                    className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-4 py-2 text-sm bg-stone-900 text-white dark:bg-white dark:text-stone-900 shadow-lg"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                >
                    {message}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default Toast;
