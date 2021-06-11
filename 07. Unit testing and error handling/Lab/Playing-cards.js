function factory(face, suit){
    let cardFaces= ['2', '3', "4", '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits= {S: '\u2660', H: '\u2665', D:'\u2666', C:'\u2663'};

    if (!cardFaces.includes(face)||
        !cardSuits[suit]) {
        throw new Error();
    }

    let output=`${face}${cardSuits[suit]}`;

    return output;
}

console.log(factory('1', 'C'));
console.log(factory('10', 'H'));
console.log(factory('A', 'S'));