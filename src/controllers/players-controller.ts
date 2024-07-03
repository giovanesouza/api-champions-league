import { Request, Response } from "express";
import * as service from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await service.getPlayerService(); // retorna a resposta completa (service)
  res.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id); // param.id -> mesmo nome de parâmetro passado na rota.
  const httpResponse = await service.getPlayerByIdService(id); // retorna a resposta completa
  res.status(httpResponse.statusCode).json(httpResponse.body);
};
