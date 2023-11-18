class Products
{
     elements=[];
     static id;
    constructor()
    {this.id=0;}
    addProduct(title,description,price,thumbnail,code,stock)
    {
        const encontrado = this.elements.findIndex(e=>e.code===code);
        if (encontrado ===-1) {
            const data={title,description,price,thumbnail,code,stock,id:this.id++}
            this.elements.push(data);
        }
        else console.log("El codigo ya existe")
    }
    getProductById(id)
    {
        const data=find(e=>e.id===id);
        return data;
    }
}
const datos=new Products();
datos.addProduct("hola","ds",11,"e","eee",1);
datos.addProduct("hola","ds",11,"e","eee",1);
console.log(datos);