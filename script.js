const testWaterFilter = () => {
    const waterStuff = ["salt", "dirt", "calcite", "uranium", "rubber"];
    const filterOut = ["uranium", "dirt"];

    console.log(`Pre filter: ${waterStuff}`);
    
    const filteredWater = filterWater(waterStuff, filterOut);

    console.log(`Post filter: ${filteredWater}`);
};


const filterWater = (stuffInWater, stuffToFilterOut) => {
    const water = [];

    for (let i = 0; i < stuffInWater.length; i++) {
        if (!stuffToFilterOut.includes(stuffInWater[i])) {
            water.push(stuffInWater[i]);
        }
    }
    return water;
}