console.log('env:', process.env.NODE_ENV);
export const BASE_URL = (process.env.NODE_ENV === "production") ? "https://seguridad-integrador.herokuapp.com/" : "http://localhost:4000";