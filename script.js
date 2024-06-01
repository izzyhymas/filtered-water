const testWaterFilter = () => {
    const waterStuff = ["salt", "dirt", "calcite", "uranium", "rubber"];

    console.log(`Pre filter: ${waterStuff}`);
    
    const filteredWater = filterWater(waterStuff);

    console.log(`Post filter: ${filteredWater}`);
};


const filterWater = (stuffInWater) => {
    const water = [];
    const stuffToFilterOut = ["uranium", "dirt"];

    for (let i = 0; i < stuffInWater.length; i++) {
        if (!stuffToFilterOut.includes(stuffInWater[i])) {
            water.push(stuffInWater[i]);
        }
    }
    return water;
}