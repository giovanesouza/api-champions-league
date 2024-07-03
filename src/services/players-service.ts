import { PlayerModel } from "../models/player-model";
import * as PlayerRepository from "../repositories/players-repository";
import * as httpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayerRepository.findAllPlayers(); // solicita ao repositório
  let response = null;

  if (data) {
    response = await httpResponse.ok(data); // retorna o status e o body
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  const data = await PlayerRepository.findPlayerById(id); // id é passado pelo Controller
  let response = null;

  if (data) {
    response = await httpResponse.ok(data); // retorna o status e o body com sucesso
  } else {
    response = await httpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;

  // Verifica se foi enviado algum valor
  if (Object.keys(player).length !== 0) {
    await PlayerRepository.insertPlayer(player);
    response = httpResponse.created();
  } else response = await httpResponse.badRequest();

  return response;
};

export const deletePlayerService = async (id: number) => {
  let response = null;
  await PlayerRepository.deleteOnePlayer(id);

  response = httpResponse.ok({message: "deleted"});
  return response;
};
