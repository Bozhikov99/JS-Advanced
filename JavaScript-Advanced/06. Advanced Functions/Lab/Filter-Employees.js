function solve(input, criteria){
    let workers=JSON.parse(input);
    let [workerCriteria, value]=criteria.split('-');

    workers=workers.filter(w=>w[workerCriteria]===value);

    for (let i = 0; i < workers.length; i++) {
        console.log(`${i}. ${workers[i].first_name} ${workers[i].last_name} - ${workers[i].email}`);
    }

}

solve(`[{
    "id": "1",
    "first_name": "Kaylee",
    "last_name": "Johnson",
    "email": "k0@cnn.com",
    "gender": "Female"
  }, {
    "id": "2",
    "first_name": "Kizzee",
    "last_name": "Johnson",
    "email": "kjost1@forbes.com",
    "gender": "Female"
  }, {
    "id": "3",
    "first_name": "Evanne",
    "last_name": "Maldin",
    "email": "emaldin2@hostgator.com",
    "gender": "Male"
  }, {
    "id": "4",
    "first_name": "Evanne",
    "last_name": "Johnson",
    "email": "ev2@hostgator.com",
    "gender": "Male"
  }]`,
 'last_name-Johnson'

);