class Header {
    constructor(title, title2, description, img, contact) {
        this.title = title;
        this.title2 = title2;
        this.description = description;
        this.img = img;
        this.contact = contact;
    }
    render() {
        document.querySelector('.header').innerHTML = `<h1>${this.title}</h1> 
        <h2>${this.title2}</h2>
        <p>${this.description}</p>
        <p><img src="${this.img}"></p>
        <p>${this.contact}</p>`;
    }
}