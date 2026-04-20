import { Router, type IRouter } from "express";
import healthRouter from "./health";
import teamsRouter from "./teams";
import resultsRouter from "./results";
import gameScoresRouter from "./game-scores";
import quizScoresRouter from "./quiz-scores";
import ratingsRouter from "./ratings";
import profileRouter from "./profile";
import dennikRouter from "./denik";
import bounceScoresRouter from "./bounce-scores";
import viewpointRatingsRouter from "./viewpoint-ratings";

const router: IRouter = Router();

router.use(healthRouter);
router.use("/teams", teamsRouter);
router.use("/results", resultsRouter);
router.use("/game-scores", gameScoresRouter);
router.use("/quiz-scores", quizScoresRouter);
router.use("/ratings", ratingsRouter);
router.use("/profile", profileRouter);
router.use("/denik", dennikRouter);
router.use("/bounce-scores", bounceScoresRouter);
router.use("/viewpoint-ratings", viewpointRatingsRouter);

export default router;
