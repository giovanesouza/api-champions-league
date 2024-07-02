import { Request, Response } from "express";
import { getPlayerService } from "../services/players-service";

export const getPlayer = async (req: Request, res: Response) => {
  const httpResponse = await getPlayerService(); // retorna a resposta completa

  res.status(httpResponse.statusCode).json(httpResponse.body);
};
