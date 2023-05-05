class Car {
    constructor(brand, name, weight, fuel_type, color, img) {
        this.brand = brand;
        this.name = name;
        this.weight = weight;
        this.fuel_type = fuel_type;
        this.color = color;
        this.img = img;
    }
    render() {
        document.querySelector('#car').innerHTML += `<div class="col col-md-6 col-lg-4">
          <div class="package">
            <p class="package-name">${this.brand}</p>
            <hr>
            <p class="price">${this.name}</p>
            <p class="disclaimer"><img height="100" src="${this.img}" alt="${this.brand} ${this.name}"></p>
            <hr>
            <ul class="features">
              <li>${this.weight}</li>
              <li>${this.fuel_type}</li>
              <li>${this.color}</li>
            </ul>
          </div>
        </div>`
    }
}