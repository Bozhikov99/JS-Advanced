class Company {
    constructor() {
        this.departments = [];
    }

    addEmployee(username, salary, position, department) {

        if (username === null || username === "" ||
            username === undefined) {
            throw new Error("Invalid input!");
        }

        if (salary === null || salary === "" ||
            salary === undefined) {
            throw new Error("Invalid input!");
        }

        if (salary<0) {
            throw new Error("Invalid input!");
        }

        if (position === null || position === "" ||
            position === undefined) {
            throw new Error("Invalid input!");
        }


        if (department === null || department === "" ||
            department === undefined) {
            throw new Error("Invalid input!");
        }

        let currentDepartment = this.departments.find(d => d.name === department);

        if (currentDepartment === undefined) {
            currentDepartment = {
                name: department,
                workers: []
            };

            this.departments.push(currentDepartment);
        }

        let newEmployee = {
            name: username,
            salary: salary,
            position: position
        }

        currentDepartment.workers.push(newEmployee);

        return `New employee is hired. Name: ${username}. Position: ${position}`;
    }

    bestDepartment() {

        for (let d of this.departments) {

            let averageSalary = d.workers.reduce((acc, x) => acc += x.salary, 0) / d.workers.length;
            d['averageSalary'] = averageSalary;
            d.workers.sort((a, b) => {
                let salaryA = a.salary;
                let salaryB = b.salary;
                let nameA = a.name;
                let nameB = b.name;

                if (salaryB > salaryA) {
                    return 1;
                }
                if (salaryB < salaryA) {
                    return -1
                }
                if (nameA.localeCompare(nameB) == -1) {
                    return -1;
                }
                if (nameA.localeCompare(nameB) == 1) {
                    return 1;
                }
            })
        }

        let sortedDepartments = this.departments.sort((a, b) => b.averageSalary - a.averageSalary);

        let bestDepartment = sortedDepartments[0];

        let output = `Best Department is: ${bestDepartment.name}\nAverage salary: ${bestDepartment.averageSalary.toFixed(2)}`;

        for (const w of bestDepartment.workers) {
            output += `\n${w.name} ${w.salary} ${w.position}`
        }

        return output;
    }
}

let c = new Company();
c.addEmployee("Stanimir", 2000, "engineer", "Construction");
c.addEmployee("Pesho", 1500, "electrical engineer", "Construction");
c.addEmployee("Slavi", 500, "dyer", "Construction");
c.addEmployee("Stan", 2000, "architect", "Construction");
c.addEmployee("Stanimir", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Pesho", 1000, "graphical designer", "Marketing");
c.addEmployee("Gosho", 1350, "HR", "Human resources");
console.log(c.bestDepartment());
