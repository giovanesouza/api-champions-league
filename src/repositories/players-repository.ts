import { PlayerModel } from "../models/player-model";

// banco de dados em memória
const database: PlayerModel[] = [
    {id: 1, name: "Messi"},
    {id: 2, name: "Ronaldo"}
];


export const findAllPlayers = async (): Promise<PlayerModel[]>  => {
    return database;
};

// Promise<PlayerModel | undefined> => o retorno pode ser os dados ou indefinido
export const findPlayerById = async (id: number): Promise<PlayerModel | undefined> => {
    return database.find(player => player.id === id);
};