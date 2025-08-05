// Objetivo: probar el comportamiento bajo una carga esperada.
import http from "k6/http";
import { sleep } from "k6";

const config = JSON.parse(open("../config.json"));

export let options = {
  vus: 50,           // Usuarios simultáneos realistas
  duration: "5m",    // Carga constante por 5 minutos
};

export default function () {
  http.get(`${config.host}/tours/health`);
  http.get(`${config.host}/tours`);
  sleep(1);
}
