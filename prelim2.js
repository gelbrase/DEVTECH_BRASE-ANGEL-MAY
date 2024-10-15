class Books{
    constructor(title, author, publicationyear, Price){
        this.title = title;
        this.author = author;
        this.publicationyear = publicationyear;
        this.price = Price;
    }
    displayDetail(){
        console.log(`Title: ${this.title}`);
        console.log(`Author: ${this.author}`);
        console.log(`Publicationyear: ${this.publicationyear}`);
        console.log(`Price ${this.price}`);
 }      

}

class Ebook extends Books{
    constructor(title, author, publicationyear, price){
        super(title, author, publicationyear, price);
        this.ebook =ebook;

    }
    displayDetail(){
        super.displayDetail();
        console.log(`Ebook: ${this.ebook}`);

    }
}

const Books1 = new Books('The Attachment Style', 'Ria Martez', 2024 , '$300.9');
const Books2 = new Books('Harryy Potter', 'Jk Rowling', 1900 , '$19.08');
const Books3 = new Books('Book3', 'Author 2', 1988 , '$25.33');

console.log('Books-1 Detail')
Books1.displayDetail();

console.log('Books-2 Detail')
Books2.displayDetail();

console.log('Books-3 Detail')
Books3.displayDetail();
   