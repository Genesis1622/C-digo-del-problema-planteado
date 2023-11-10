// Creación de la interface Publicador y sus respectivas funciones, que en este caso va a ser el objeto observado.
export interface Publicador {
    agregar(o: Suscriptor): void;
    eliminar(o: Suscriptor): void;
    notificar(): void;
}

// Creación de la interface Suscriptor con su método actualizar, que para este ejemplo es el observador.
export interface Suscriptor {
    actualizar(sujeto: Publicador): void;
}

// Implementamos la interface Publicador en la clase que acabamos de crear "NetflixStreaming".
export class NetflixStreaming implements Publicador {

    // Creación de un campo privado para tener registrados a los suscriptores de "streamingSuscriptor", es decir, solo va a ser visible para la clase en la que se definió.
    private streamingSuscriptor: Suscriptor[] = [];
    private ultimoVideoSubido!: string;
    // Para agregar a un nuevo suscriptor y añadirlo al observer.
    agregar(o: Suscriptor): void {
        this.streamingSuscriptor.push(o);
    }

    // Para eliminar el suscriptor.
    eliminar(o: Suscriptor): void {
        const indice = this.streamingSuscriptor.indexOf(o);
        this.streamingSuscriptor.splice(indice, 1);
    }

    nuevoVideo(titulo: string): void {
        // Para agregar el nuevo título que pasamos como parámetro al ultimo video subido.
        this.ultimoVideoSubido = titulo;
        // Para notificar el cambio que ha ocurrido en el objeto observado.
        this.notificar();
        // Lo que va a parecer en el mensaje de notificación.
        console.log("Nuevo video en Netflix");
    }

    ultimoVideoTitulo(): string {
        // Para retornar el título del último video subido.
        return this.ultimoVideoSubido;
    }
    // Implementamos la función notificar para que los suscriptores que observan este sitio estén al tanto.
    notificar(): void {
        // Recorre todos los suscriptores que se han suscripto y llamamos a la función actualizar.
        for (let suscriptor of this.streamingSuscriptor) {
            suscriptor.actualizar(this);
        }
    }
}

// Implementamos la interface Suscriptor en la clase que acabamos de crear "Suscribirse".
export class Suscribirse implements Suscriptor {
    private publicador: Publicador;
    constructor(publicador: Publicador) {
        this.publicador = publicador;
    }
    actualizar(): void {
        console.log("NetflixStreaming ha subido un nuevo video");
    }
}

