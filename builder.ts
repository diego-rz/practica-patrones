class Casa {
  ambientes: number;
  dormitorios: number;
  banios: number;
  superficieCubierta: number
  superficieDescubierta: number = 0
  antiguedad: number = 0
  pisos: number = 1
  pileta: boolean = false
  cochera: boolean = false
}

class CasaBuilder {
  casa: Casa = new Casa();
  build(): Casa {
    if (!this.casa) {
      throw Error("No hay casa")
    }
    if (!this.casa.ambientes || !this.casa.dormitorios || !this.casa.banios || !this.casa.superficieCubierta) {
      throw Error("Faltan datos mínimos")
    }
    if (this.casa.ambientes === 0) {
      throw Error("No puede haber una casa sin ambientes")
    }
    if (this.casa.dormitorios > this.casa.ambientes) {
      throw Error("La cantidad de dormitorios no puede ser mayor a la cantidad de ambientes")
    }
    return this.casa;
  };
  ambientes(ambientes: number): CasaBuilder {
    this.casa.ambientes = ambientes;
    return this;
  };
  dormitorios(dormitorios: number): CasaBuilder { 
    this.casa.dormitorios = dormitorios;
    return this;
  }
  banios(banios: number): CasaBuilder { 
    this.casa.banios = banios;
    return this;
  }
  superficieCubierta(superficieCubierta: number): CasaBuilder { 
    this.casa.superficieCubierta = superficieCubierta;
    return this;
  }
  superficieDescubierta(superficieDescubierta: number): CasaBuilder { 
    this.casa.superficieDescubierta = superficieDescubierta;
    return this;
  }
  antiguedad(antiguedad: number): CasaBuilder { 
    this.casa.antiguedad = antiguedad;
    return this;
  }
  pisos(pisos: number): CasaBuilder { 
    this.casa.pisos = pisos;
    return this;
  }
  pileta(pileta: boolean): CasaBuilder { 
    this.casa.pileta = pileta;
    return this;
  }
  cochera(cochera: boolean): CasaBuilder { 
    this.casa.cochera = cochera;
    return this;
  }
}

const casa: Casa = new CasaBuilder().ambientes(3).banios(1).dormitorios(1).superficieCubierta(60).build();
console.log(casa);
