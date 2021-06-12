function factory(cards){

    let cardFaces= ['2', '3', "4", '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    let cardSuits= {S: '\u2660', H: '\u2665', D:'\u2666', C:'\u2663'};

    let cardArr=[];

    for (const c of cards) {
        
        let suit=c[c.length-1];
        let face=c.slice(0, c.length-1);

        let card=generateCard(face, suit);

        cardArr.push(card);

    }

    function generateCard(face, suit){
            if (!cardFaces.includes(face)||
            !cardSuits[suit]) {
            console.log(`Invalid Card: ${face}${suit}`);
        }

        return {
            face, suit, toString: ()=> {
                return face+suit;
            }
        };
    }

    console.log(cardArr.join(' '));
}

factory(['AS', '10D', 'KH', '2C']);
factory(['5S', '3D', 'QD', '1C']);