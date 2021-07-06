function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
      let restaurantOutputElement=document.querySelector('#outputs #bestRestaurant p');
      let workersOutputElement=document.querySelector('#outputs #workers p');

      let textElement=document.querySelector('textarea');
      let restaurantsInput=JSON.parse(textElement.value);

      let restaurants={};

      for (const r of restaurantsInput) {
         let [currRestName, workersStr] = r.split(' - ');

         if (!restaurants[currRestName]) {
            restaurants[currRestName]={
               name: currRestName,
               workers: [],
               bestSalary: 0,
               averageSalary: 0
            };
         }

         let currentRestaurant=restaurants[currRestName];
         let workersInfo=workersStr.split(', ');
         
         for (const w of workersInfo) {
            let [workerName, workerSalary]=w.split(' ');
            workerSalary=Number(workerSalary);
            
            let worker={
               name: workerName,
               workerSalary: workerSalary
            };
         
            currentRestaurant['workers'].push(worker);
         }

      }

      let restaurantObjs=Object.values(restaurants);

      for (let r of restaurantObjs) {
         let currentWorkers=r['workers'];

         let currAvSalary=(currentWorkers
         .reduce((acc, x)=>acc+=x.workerSalary,0)/currentWorkers.length)
         .toFixed(2);

         let currBestSalary=(currentWorkers
         .sort((a,b)=>b.workerSalary-a.workerSalary)[0].workerSalary)
         .toFixed(2);

         r['averageSalary']=currAvSalary;
         r['bestSalary']=currBestSalary;

      }



      let bestRestaurant=Object.values(restaurants)
      .sort((a, b)=>b.averageSalary-a.averageSalary)[0];

      bestRestaurant
      .workers
      .sort((a, b)=>b.workerSalary-a.workerSalary);

      let bestRestaurantOutput=`Name: ${bestRestaurant.name} Average Salary: ${bestRestaurant.averageSalary} Best Salary: ${bestRestaurant.bestSalary}`;
      restaurantOutputElement.textContent=bestRestaurantOutput;

      let workersOutput='';

      for (const w of bestRestaurant.workers) {
         workersOutput+=`Name: ${w.name} With Salary: ${w.workerSalary} `
      }

      workersOutputElement.textContent=workersOutput.trimEnd();
   }
}