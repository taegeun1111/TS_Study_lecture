class Department {
    // private id: string;
    // private name: string;
    protected employees: string[] = [];

    constructor(private readonly id: string, public name: string) {
        // this.name = n;
    }

    describe(this: Department) {
        console.log(`Department (${this.id}) : ` + this.name);
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department{
    admins:string[];
    constructor(id:string, admins:string[]) {
        super(id,'IT');
        this.admins = admins;
    }
}

class AccountingDepartment extends Department{
    constructor(id:string,private reports:string[]) {
        super(id, 'IT');
    }

    addEmployee(name: string) {
        if (name === 'Max'){
            return;
        }
        this.employees.push(name)
    }

    addReport(text:string){
        this.reports.push(text);
    }

    printReports(){
        console.log(this.reports)
    }
}

const it = new ITDepartment('d1',['Max']);

it.addEmployee('Max');
it.addEmployee('Manu');

// accounting.employees[2] = 'Anna'

it.describe();
it.name = 'NEW NAME'
it.printEmployeeInformation();

console.log(it);
// const accountingCopy = {name : 'DUMMY', describe: accounting.describe};
// accountingCopy.describe();


const accounting = new AccountingDepartment('d2',[]);
accounting.addReport('Something went wrong');

accounting.addEmployee('Max');
accounting.addEmployee('Manu');

accounting.printReports();
accounting.printEmployeeInformation()
