import { Router, type IRouter } from "express";
import healthRouter from "./health";
import teamsRouter from "./teams";
import resultsRouter from "./results";
import gameScoresRouter from "./game-scores";
import quizScoresRouter from "./quiz-scores";
import ratingsRouter from "./ratings";
import profileRouter from "./profile";
import dennikRouter from "./denik";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/teams", teamsRouter);
router.use("/results", resultsRouter);
router.use("/game-scores", gameScoresRouter);
router.use("/quiz-scores", quizScoresRouter);
router.use("/ratings", ratingsRouter);
router.use("/profile", profileRouter);
router.use("/denik", dennikRouter);

export default router;
