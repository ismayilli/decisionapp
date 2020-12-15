const isAdult = (age) => {
    if(age>=18) {
        return true;
    }
    return false;
}

const canDrink = (age) => {
    if(age>=21) {
        return true;
    }
    return false;
}

const isSenior = (age) => age>=45

export {isAdult,canDrink}

export default isSenior;