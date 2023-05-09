class Header {
    constructor(img, h1, h2) {
        this.src = img;
        this.h1 = h1;
        this.h2 = h2;
    }
    render(element) {
        console.log(this.h1);
        let out = '';
        out += `<img src="${this.src}" alt="">`;
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.getElementById(element).innerHTML = out;
    }
}

const img = 'https://cdn4.iconfinder.com/data/icons/logos-brands-5/24/react-1024.png';
let header = new Header(img, 'title h1', 'title h2');
header.render('header');
