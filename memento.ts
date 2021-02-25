// interfaces

interface Originador<T> {
  save(): Memento<T>
  restore(memento: Memento<T>): void
}

interface Memento<T> {
  getState(): T
}

class ManejadorMemento<T> {
  historia: Memento<T>[] = []
  originador: Originador<T>
  constructor(originador: Originador<T>) {this.originador = originador }
  guardarEstado(): void {
    this.historia.push(this.originador.save());
  }
}


// implementaciones

class OriginadorCuenta implements Originador<Cuenta> {
  state: Cuenta;
  save(): Memento<Cuenta> {
    const snapshot = this.state.clone();
    return new CuentaMemento(snapshot);
  }
  restore(memento: Memento<Cuenta>) {
    this.state = memento.getState()
  }
}

class CuentaMemento implements Memento<Cuenta> {
  constructor(public cuenta: Cuenta) {}
  getState(): Cuenta {
    return this.cuenta
  }
}

// estado

class Cuenta {
  constructor(
    private _saldoDisponible: number,
    private _saldoRetenido: number,
    private _descubiertoAutorizado: number,
    private _bloqueada: boolean
  ) {}
  clone(): Cuenta {
    return new Cuenta(this._saldoDisponible, this._saldoRetenido, this._descubiertoAutorizado, this._bloqueada);
  }
}


// código cliente

const originador = new OriginadorCuenta();
const historial = new ManejadorMemento<Cuenta>(originador);

originador.state = new Cuenta(10, 0, 0, false);
historial.guardarEstado();
originador.state = new Cuenta(25, 0, 0, false);
historial.guardarEstado();
originador.state = new Cuenta(25, 0, 0, true);
historial.guardarEstado();
originador.state = new Cuenta(25, 0, 10, false);
historial.guardarEstado();

// console.log(historial.historia);

console.log(originador.state)
originador.restore(historial.historia[2])
console.log(originador.state)


