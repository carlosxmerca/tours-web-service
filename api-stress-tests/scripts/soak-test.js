// Objetivo: verificar estabilidad durante un uso prolongado.
import http from "k6/http";
import { sleep } from "k6";

const config = JSON.parse(open("../config.json"));

export let options = {
  vus: 20,            // Usuarios constantes y moderados
  duration: "30m",    // Uso prolongado
};

export default function () {
  http.get(`${config.host}/tours/health`);
  http.get(`${config.host}/tours`);
  sleep(1);
}
