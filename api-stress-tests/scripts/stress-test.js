// Objetivo: probar el límite máximo que puede manejar la app.
import http from "k6/http";
import { sleep } from "k6";

const config = JSON.parse(open("../config.json"));

export let options = {
  stages: [
    { duration: "1m", target: 50 },
    { duration: "1m", target: 100 },
    { duration: "1m", target: 200 },
    { duration: "1m", target: 300 },
    { duration: "1m", target: 400 },
    { duration: "2m", target: 0 },  // bajada gradual
  ],
};

export default function () {
  http.get(`${config.host}/tours/health`);
  http.get(`${config.host}/tours`);
  sleep(1);
}
