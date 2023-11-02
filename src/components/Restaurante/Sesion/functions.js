export const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regexCorreo.test(correo)) {
        return true; 
    } else {
        return false;
    }
}