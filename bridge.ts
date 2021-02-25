interface Dispositivo {
  conexion: Conexion;
  encender(): void
  apagar(): void
}

interface Conexion {
  conectar(): void
  identificar(): void
}

class Teclado implements Dispositivo {
  conexion: Conexion;
  constructor(conexion: Conexion) { this.conexion = conexion }
  encender(): void {
    console.log("Prendo el teclado")
  }
  apagar(): void {
    console.log("Apago teclado")
  }
}
class Raton implements Dispositivo {
  conexion: Conexion;
  constructor(conexion: Conexion) { this.conexion = conexion }
  encender(): void {
    console.log("Prendo el ratón")
  }
  apagar(): void {
    console.log("Apago raton")
  }
}
class Parlante implements Dispositivo {
  conexion: Conexion;
  constructor(conexion: Conexion) { this.conexion = conexion }
  encender(): void {
    console.log("Prendo el parlante")
  }
  apagar(): void {
    console.log("Apago parlante")
  }
}

class Bluetooth implements Conexion {
  conectar(): void {
    console.log("Conectando... Listo")
  }
  identificar(): void {
    console.log("Buscando... acá estoy")
  }
}
class Cable implements Conexion {
  conectar(): void {
    console.log("Ya estoy conectado por cable");
  }
  identificar(): void {
    console.log("Acá estoy")
  }
}

const tecladoBluetooth = new Teclado(new Bluetooth());
tecladoBluetooth.encender()
tecladoBluetooth.conexion.conectar()