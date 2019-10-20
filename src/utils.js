console.log('env:', process.env.tipo);
export const BASE_URL = (process.env.tipo !== "development") ? "https://seguridad-integrador.herokuapp.com" : "http://localhost:4000";