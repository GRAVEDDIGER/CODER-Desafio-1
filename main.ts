interface elements {
  title: string;
  price: number;
  stock: number;
  description: string;
  thumbnail: string;
  code: string;
  id?: number;
}
class Product {
  static id: number;
  elements: elements[] = [];
  constructor() {
    if (Product.id === undefined) Product.id = 0;
  }
  addProduct(data: elements): void {
    const newProduct: elements = { ...data, id: Product.id++ };
    const encontrado = this.elements.findIndex(
      (e) => e.code == newProduct.code
    );
    if (encontrado != -1) this.elements.push(newProduct);
    else console.log("Codigo ya existe");
  }
}

const objeto = new Product();
objeto.addProduct({
  code: "texto",
  description: "otro",
  price: 1,
  stock: 3,
  thumbnail: "tete",
  title: "ddd",
});
console.log(objeto);
