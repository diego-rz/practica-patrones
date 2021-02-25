interface Comando {
  ejecutar(): void
}

class ComandoGuardar implements Comando {
  constructor(public archivo: string) {}
  ejecutar(): void {
    console.log("Guardando \'" + this.archivo + "\'");
  }
}

class ComandoCopiar implements Comando {
  constructor(public texto: string) {}
  ejecutar(): void {
    console.log("Copiado: \'" + this.texto + "\'");
  }
}

class Boton {
  constructor(public comando: Comando) {}
  click(): void {
    this.comando.ejecutar();
  }
}

class AtajoDeTeclado {
  constructor(public comando: Comando) {}
  pulsado(): void {
    this.comando.ejecutar()
  }
}

new Boton(new ComandoCopiar("copiame")).click();
const comandoGuardar = new ComandoGuardar("guardar.txt");
new Boton(comandoGuardar).click();
new AtajoDeTeclado(comandoGuardar).pulsado();