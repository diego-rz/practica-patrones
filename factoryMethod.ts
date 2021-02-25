interface Transporte {
  realizarEnvio(direccion: string): void;
}

class Camion implements Transporte {
  realizarEnvio(direccion: string): void {
    console.log("El camion va a " + direccion);
  }
}

class Barco implements Transporte {
  realizarEnvio(direccion: string): void {
    console.log("El barco navega hasta " + direccion);
  }
}

interface FabricaLogistica {
  crearTransporte(): Transporte;
}

class FabricaTerrestre implements FabricaLogistica {
  crearTransporte(): Transporte {
    return new Camion();
  }
}

class FabricaMaritima implements FabricaLogistica {
  crearTransporte(): Transporte {
    return new Barco();
  }
}

function enviar(direccion: string, transporte: Transporte) {
  console.log("Preparar envío")
  transporte.realizarEnvio(direccion)
  console.log("Envío realizado")
}

let fabrica = new FabricaMaritima();
enviar("malvinas 407", fabrica.crearTransporte());
fabrica = new FabricaTerrestre()
enviar("quirno 400", fabrica.crearTransporte())

