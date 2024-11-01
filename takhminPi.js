
function takhminPi(tedadeNoghat) {
    let dakheleDayere = 0;

    for (let i = 0; i < tedadeNoghat; i++) {
        const x = Math.random();
        const y = Math.random();

        if (x * x + y * y <= 1) {
            dakheleDayere++;
        }
    }

    const meghdarePi = (4 * dakheleDayere) / tedadeNoghat;
    return meghdarePi;
}

export {
    takhminPi
}
