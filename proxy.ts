interface OperacionSecreta {
  ejecutar(): void
}

class LaOperacionSecreta implements OperacionSecreta {
  ejecutar(): void {
    console.log("Se está ejecutando la operación secreta...")
  }
}

class ProxyOperacionSecreta implements OperacionSecreta {
  operacionReal: LaOperacionSecreta = new LaOperacionSecreta();
  usuario: string;
  ejecutar(): void {
    if (this.usuario !== "julio") {
      throw Error("No tenés permiso")
    }
    this.operacionReal.ejecutar()
  }
  constructor(usuario: string) {
    this.usuario = usuario
  }
}

new ProxyOperacionSecreta("julio").ejecutar()