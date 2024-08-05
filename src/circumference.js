let circumference = (radius) => {
    const π = 3.14
    let fullCircle = ((radius * 2) * π)
    if(radius <= 0) {
        return "Needs to be over 0!"
    }
    return fullCircle
};

export default circumference