import { Router, type IRouter } from "express";
import healthRouter from "./health";
import teamsRouter from "./teams";
import resultsRouter from "./results";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/teams", teamsRouter);
router.use("/results", resultsRouter);

export default router;
