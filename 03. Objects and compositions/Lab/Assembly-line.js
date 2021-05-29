function createAssemblyLine(){
    const library={
        hasClima: function(obj){
            obj.temp=21;
            obj.tempSettings=21;
            obj.adjustTemp=function(){
                if (this.temp<this.tempSettings) {
                    this.temp++;
                }
                else if(this.temp>this.tempSettings){
                    this.temp--;
                }
            }
        },
        hasAudio:function(obj){
            obj.currentTrack={
                name: String(null),
                artist: String(null),
            };
            obj.nowPlaying=function(){
                if (this.currentTrack!==null) {   
                    console.log(`Now playing '${this.currentTrack.name}' by ${this.currentTrack.artist}`);
                }
            };
        },
        hasParktronic:function(obj){
            obj.checkDistance=function(num){
                let dist=Number(num);
                if (dist>=0.25&&dist<0.5) {
                    console.log("Beep!");
                }
                else if(dist<0.25&&dist>=0.1){
                    console.log("Beep! Beep!");
                }
                else if (dist<0.1) {
                    console.log("Beep! Beep! Beep!");
                }
                else{
                    console.log('');
                }
            };
        }
    };

    return library;
}

const assemblyLine = createAssemblyLine();
const myCar = {
make: 'Toyota',
model: 'Avensis'
};
assemblyLine.hasClima(myCar);
console.log(myCar.temp);
myCar.tempSettings = 18;
myCar.adjustTemp();
console.log(myCar.temp);

assemblyLine.hasAudio(myCar);
myCar.currentTrack = {
name: 'Never Gonna Give You Up',
artist: 'Rick Astley'
};
myCar.nowPlaying();

assemblyLine.hasParktronic(myCar);
myCar.checkDistance(0.4);
myCar.checkDistance(0.2);

console.log(myCar);