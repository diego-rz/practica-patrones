interface Dibujable {
  dibujar(): void
}

abstract class Silla implements Dibujable {
  abstract dibujar(): void;
}
class SillaVictoriana extends Silla {
  dibujar(): void {
    console.log(this)
  }
}
class SillaArtDeco extends Silla {
  dibujar(): void {
    console.log(this)
  }
}
class SillaModerna extends Silla {
  dibujar(): void {
    console.log(this)
  }
}

abstract class Sofa implements Dibujable {
  abstract dibujar(): void;
}
class SofaVictoriana extends Sofa {
  dibujar(): void {
    console.log(this)
  }
}
class SofaArtDeco extends Sofa {
  dibujar(): void {
    console.log(this)
  }
}
class SofaModerna extends Sofa {
  dibujar(): void {
    console.log(this)
  }
}

abstract class Mesa implements Dibujable {
  abstract dibujar(): void;
}
class MesaVictoriana extends Mesa {
  dibujar(): void {
    console.log(this)
  }
}
class MesaArtDeco extends Mesa {
  dibujar(): void {
    console.log(this)
  }
}
class MesaModerna extends Mesa {
  dibujar(): void {
    console.log(this)
  }
}

interface FabricaMuebles {
  crearSilla(): Silla;
  crearSofa(): Sofa;
  crearMesa(): Mesa;
}

class FabricaVictoriana implements FabricaMuebles{
  crearSilla(): Silla {
    return new SillaVictoriana()
  }
  crearSofa(): Sofa {
    return new SofaVictoriana()
  }
  crearMesa(): Mesa {
    return new MesaVictoriana()
  }
}
class FabricaArtDeco implements FabricaMuebles{
  crearSilla(): Silla {
    return new SillaArtDeco()
  }
  crearSofa(): Sofa {
    return new SofaArtDeco()
  }
  crearMesa(): Mesa {
    return new MesaArtDeco()
  }
}
class FabricaModerna implements FabricaMuebles{
  crearSilla(): Silla {
    return new SillaModerna()
  }
  crearSofa(): Sofa {
    return new SofaModerna()
  }
  crearMesa(): Mesa {
    return new MesaModerna()
  }
}

const fabrica = new FabricaArtDeco()
const silla1 = fabrica.crearSilla();
silla1.dibujar()
const silla2 = fabrica.crearSilla();
silla2.dibujar()
const sofa = fabrica.crearSofa();
sofa.dibujar()
const mesa = fabrica.crearMesa();
mesa.dibujar()
