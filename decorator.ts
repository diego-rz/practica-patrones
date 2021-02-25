interface Notificador {
  notificar(mensaje: string): void;
}

class NotificadorPush implements Notificador {
  notificar(mensaje: string): void {
    console.log("Notificación push: \'" + mensaje + "\'" );
  }
}

abstract class DecoradorNotificador implements Notificador {
  notificar(mensaje: string): void {
    this.decorado.notificar(mensaje)
  }
  decorado: Notificador
  constructor(decorado: Notificador) {
    this.decorado = decorado
  }
}

class NotificadorSms extends DecoradorNotificador {
  notificar(mensaje: string): void {
    super.notificar(mensaje);
    console.log("Notifico por sms: \'" + mensaje + "\'"  );
  }
}

class NotificadorSlack extends DecoradorNotificador {
  notificar(mensaje: string): void {
    super.notificar(mensaje);
    console.log("Notifico por slack: \'" + mensaje + "\'"  );
  }
}

const push = new NotificadorPush();
const slack = new NotificadorSlack(push);
new NotificadorSms(slack).notificar("Probando...")

