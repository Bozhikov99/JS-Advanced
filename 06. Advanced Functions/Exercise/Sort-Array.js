function sovle(array, arg){
    if (arg==='asc') {
        return array.sort((a, b)=> a-b);
    }
    else if(arg==='desc') {
        return array.sort((a, b)=> b-a);
    }
}

console.log(sovle([14, 7, 17, 6, 8], 'asc'));