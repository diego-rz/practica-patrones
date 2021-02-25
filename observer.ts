interface Suscriptor<T> {
  notificar(estado: T): void
}

interface Notificador<T> {
  suscribir(suscriptor: T): void;
  desuscribir(suscriptor: T): void
  notificar(): void
}

class Recursos {
  constructor(
    public oro: number,
    public madera: number,
    public alimento: number,
    public roca: number
  ) {}
}

class Publicador implements Notificador<Jugador> {
  private recursos: Recursos;
  private suscriptores: Jugador[] = [];
  suscribir(suscriptor: Jugador): void {
    this.suscriptores = [ ...this.suscriptores, suscriptor ];
  }
  desuscribir(suscriptor: Jugador): void {
    this.suscriptores = this.suscriptores.filter(s => suscriptor !== s)
  }
  notificar(): void {
    this.suscriptores.forEach(s => s.notificar(this.recursos))
  }
  setRecursos(recursos: Recursos) {
    this.recursos = recursos;
    this.notificar();
  }
}

class Jugador implements Suscriptor<Recursos> {
  constructor(
    public nombre: string,
    public minimoParaQueSePongaALaburar: number
  ) {}
  notificar(estado: Recursos): void {
    console.log(this.nombre + " dice: ")
    console.log(estado.alimento > this.minimoParaQueSePongaALaburar ? 
      "Estamos bien, no hago nada" : "Me voy a poner a hacer algo");
    console.log("------")
  }
}

const julio = new Jugador("Julio", 20);
const pepe = new Jugador("Pepe", 30);

const publicador = new Publicador();
publicador.suscribir(julio);
publicador.suscribir(pepe);
publicador.setRecursos(new Recursos(10, 30, 25, 20));
publicador.setRecursos(new Recursos(10, 30, 19, 20));
publicador.setRecursos(new Recursos(10, 30, 50, 20));
