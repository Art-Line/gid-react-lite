class Employer extends Man {
    constructor(name, age, passport, sex, create, salary) {
        super(name, age, passport, sex);
        this.create = create;
        this.salary = salary;
    }
    render(place) {
        super.render(place);
        document.querySelector(place).innerHTML += `<p>${this.create}</p><p>${this.salary}</p>`;
    }
    get clientName() {
        return this._name;
    }    
    set clientName(d) {
        if (typeof (d) === 'string') {
            d = d.replace(/\s+/g, '');
            this._name = d;
        }
    }
}