export const getLeadingZeros = (number) => {
    let numZeros = 4 - number.toString().length;
    let leadingZeros = "";

    for (let i = 0; i < numZeros; i++) {
        leadingZeros += "0";
    }
    return leadingZeros + number;
}

export const getTypesArr = (types) => {
    let returnArr = [];
    
    types.forEach((item) => {
        let type = (item.type).name;
        returnArr.push(<><p className={"card__" + type + " card__badge"}>{type.toUpperCase()}</p></>);
    });
    
    return returnArr;
}