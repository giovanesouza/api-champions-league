import { Router } from "express"; // Importa gerenciador de rotas do express
import { welcome } from "../controllers/welcome-controller";
import { getPlayer } from "../controllers/players-controller";

const router = Router();

router.get("/", welcome)
router.get("/players", getPlayer)

export default router;