import { log } from "./log.mjs";

export const handler = async (event) => {

    log('event: ' + JSON.stringify(event));

    return {
        statusCode: 200,
        body: `<html><body>Dados da requisicao ${event}</body></html>`,
        "content-type": "text/html"
    };
  };