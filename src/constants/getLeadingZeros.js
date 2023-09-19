const getLeadingZeros = (number) => {
    let numZeros = 4 - number.toString().length;
    let leadingZeros = "";

    for (let i = 0; i < numZeros; i++) {
        leadingZeros += "0";
    }
    return leadingZeros + number;
}
    
export default getLeadingZeros;