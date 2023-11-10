import { NetflixStreaming } from "./observer";

import { Suscribirse } from "./observer";

let streaming = new NetflixStreaming;
let suscriptor1 = new Suscribirse(streaming);
let suscriptor2 = new Suscribirse(streaming);

streaming.agregar(suscriptor1);
streaming.agregar(suscriptor2);
streaming.eliminar(suscriptor2);
streaming.nuevoVideo("Guardianes de la Galaxia");