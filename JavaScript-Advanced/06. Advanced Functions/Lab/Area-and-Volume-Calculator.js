function area(){
    return Math.abs(this.x*this.y);
};

function vol(){
    return Math.abs(this.x*this.y*this.z);
};

function solve(are, vol, input){
    let inputArray=JSON.parse(input);
    let outputArray=[];

    let areaFunction=are;
    let volumeFunction=vol;

    for (const o of inputArray) {
        let area=areaFunction.call(o);
        let volume=volumeFunction.call(o);

        outputArray.push({
            area,
            volume
        });
    }

    return outputArray;
}

solve(area, vol, 
    '[{"x":"1","y":"2","z":"10"},{"x":"7","y":"7","z":"10"},{"x":"5","y":"2","z":"10"}]');