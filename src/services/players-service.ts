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
