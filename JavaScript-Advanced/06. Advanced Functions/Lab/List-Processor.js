function solve(input){
    let list=[];

    for (const c of input) {
        
        let [cmd, str]=c.split(' ');
        
        process(cmd, str, list);
    }
    function process(cmd, str, list){
        const processor = {
            add(str){
               list.push(str);
            },
            remove(str){ 
                for (let i = 0; i < list.length; i++) {
                    if (list[i]===str) {
                        list.splice(i, 1);
                    }
                }
            },
            print(){
               console.log(list.join(','));
            }
        }
    
        return processor[cmd](str);
    }
}


let list=[];
solve(['add hello', 'add again', 'remove hello', 'add again', 'print'])