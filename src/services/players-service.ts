import * as PlayerRepository from "../repositories/players-repository";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers();
    let response = null;

  if (data) {
    response = await ok(data); // retorna o status e o body
} else {
      response = await noContent();
  }

  return response;
};
