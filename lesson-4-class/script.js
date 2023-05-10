class Header {
    constructor(h1, h2) {
        this.h1 = h1;
        this.h2 = h2;
    }
    render(x) {
        let out = '';
        out += `<h1>${this.h1}</h1>`;
        out += `<h2>${this.h2}</h2>`;
        document.querySelector(x).innerHTML = out;
    }
    static hello(y) {
        console.log('work' + y);
    }
}

const header = new Header('hello', 'world');
header.h3 = 'new title';
header.render('#header');
console.log(header);

class HeaderNew extends Header {
    constructor(h1, h2, h4) {
        super(h1, h2);
        this._h4 = h4;
    }
    get title() {
        return this._h4;
    }
    set title(param) {
        this._h4 = param;
    }
}



const headerNew = new HeaderNew('hi', 'my', 'first')
headerNew.title = 'setter title';
console.log(headerNew);
console.log('getter', headerNew.title);
Header.hello('my site')