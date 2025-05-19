// src/config.js
const API_HOST = import.meta.env.VITE_DIRECTUS_API;
const API_PORT = import.meta.env.VITE_DIRECTUS_PORT;
const PROTOCOL = import.meta.env.VITE_SERVER_PROTOCOL;

export const DIRECTUS_API_URL = `${PROTOCOL}://${API_HOST}:${API_PORT}`;
