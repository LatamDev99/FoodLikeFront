export const validarCorreo = (correo) => {
    const regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regexCorreo.test(correo)) {
        return true; 
    } else {
        return false;
    }
}

export const validarContrasena = (contrasena) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(contrasena);
}

export const compararContraseña = (contrasena, repetircontraseña) => {
    return contrasena === repetircontraseña;
}

export function validarStrings(nombre) {
    // Expresión regular para validar que el nombre solo contenga letras
    const regex = /^[A-Za-z]+$/;
    return regex.test(nombre);
}

export function validarTelefono(telefono) {
    // Expresión regular para validar que el teléfono solo contenga números y tenga 9 o 10 dígitos
    const regex = /^[0-9]{9,10}$/;
    return regex.test(telefono);
}