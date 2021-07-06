function solve(name, pop, tr){
    const city={
        name: name,
        population: pop,
        treasury: tr,
        taxRate: 10,
        collectTaxes()
        {
            Math.round(this.treasury+=this.population*this.taxRate);
        },
        applyGrowth(percentage)
        {
            Math.round(this.population+=this.population*(percentage/100));
        },
        applyRecession(percentage)
        {
            Math.round(this.treasury-=this.treasury*(percentage/100));
        }
        }
    return city;
}

solve('Tortuga',
    7000,
    15000)