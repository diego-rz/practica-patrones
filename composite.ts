interface ComponentePedido {
  calcularPrecio(): number;
}

class Caja implements ComponentePedido {
  constructor(public componentes: ComponentePedido[] = []) {}
  calcularPrecio(): number {
    return this.componentes.reduce((prev, curr) => prev + curr.calcularPrecio(), 0);
  }
}

class Producto implements ComponentePedido {
  constructor(
    public descripcion: String = "",
    public precio: number = 0
  ) {}
  calcularPrecio(): number {
    return this.precio
  }
}

const celular = new Producto("moto g8", 25000);
const funda = new Producto("funda moto g8", 1500);
const auriculares = new Producto("jbl T1", 7000);

const cajaCel = new Caja([celular, funda]);
const cajaGral = new Caja([cajaCel, auriculares]);

console.log(cajaGral.calcularPrecio());

