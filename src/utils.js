console.log('env:', process.env.tipo);
export const BASE_URL = (process.env.tipo === "production") ? "https://seguridad-integrador.herokuapp.com/" : "http://localhost:4000";