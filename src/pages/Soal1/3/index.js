const No3 = (str) => {
    str = str.toLowerCase().replace(/\s/g, "")

    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }

    if (str === reversed) {
        return true
    } else {
        return false
    }
}

export default No3