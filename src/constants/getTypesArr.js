const getTypesArr = (types) => {
    let returnArr = [];
    
    types.forEach((item) => {
        let type = (item.type).name;
        returnArr.push(<><p className={"card__" + type + " card__badge"}>{type.toUpperCase()}</p></>);
    });
    
    return returnArr;
}

export default getTypesArr