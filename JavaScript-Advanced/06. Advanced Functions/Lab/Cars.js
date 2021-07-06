function create(input){
    const CarsList={};

    for (const i of input) {
        let [cmd, name] = i.split(' ');
        let args=[name];

        if (i.includes('inherit')) {
            args.push(i.split(' ')[3]);

        } else if (cmd==='set'){
            args.push(i.split(' ')[2]);
            args.push(i.split(' ')[3]);
        }

        process(cmd, args);

    }

    function process(cmd, args){
        let name = args[0];

        const processor = {
            create(){

                if (args[1]) {
                    let prototypeName=args[1];
                    let newCar=Object.create(CarsList[prototypeName]);
                    CarsList[name]=newCar;

                } else {
                    CarsList[name]={};
                }
            },
            set(){
                let currentCar = CarsList[name];
                currentCar[args[1]]=args[2];
            },
            print(){
                let currCar=CarsList[name];
                let props=[];
                for (const prop in currCar) {
                    props.push(`${prop}:${currCar[prop]}`);
                }
                console.log(props.join(', '));
            }
        }

        return processor[cmd](args);
    }
}

create([
'create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
)