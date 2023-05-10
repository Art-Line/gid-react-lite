class Man {
    constructor(name, age, passport, sex) {
        this._name = name;
        this.age = age;
        this.passport = passport;
        this.sex = sex;
    }
    render(place) {
        let out = '';
        out += `<p>${this._name}</p><p>${this.age}</p><p>${this.passport}</p><p>${this.sex}</p>`;
        document.querySelector(place).innerHTML = out;
    }
}