function solve(worker)
{
    if (worker.dizziness==true)
    {
        let neededWater=0.1*worker.experience*worker.weight;

        worker.levelOfHydrated+=neededWater;
        worker.dizziness=false;
    }

    return worker;
}

console.log(solve({weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true}));