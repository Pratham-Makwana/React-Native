import express, { Response } from "express";
import { authMiddleware, AuthRequest } from "../middleware/middleware";
import Recipe from "../models/Recipe";
const router = express.Router();

router.post(
  "/create",
  authMiddleware,
  async (req: AuthRequest, res: Response) => {
    try {
      const { title, description, difficulty } = req.body;
      const newlyCreatedRecipe = new Recipe({
        title,
        description,
        difficulty,
        cratedBy: req.userId,
      });

      await newlyCreatedRecipe.save();

      res.status(201).json({
        success: true,
        message: "Recipe Added Successfully",
        newRecipeData: newlyCreatedRecipe,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  }
);

router.get("/get", authMiddleware, async (req: AuthRequest, res: Response) => {
  try {
    const fetchAllRecipes = await Recipe.find({});
    res.status(200).json({
      success: true,
      allRecipeData: fetchAllRecipes,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      success: false,
      message: "Something went wrong! Please try again",
    });
  }
});

router.get(
  "/get/:id",
  authMiddleware,
  async (req: AuthRequest, res: Response): Promise<any> => {
    // console.log("==> backend id ", req.params.id);
    // console.log("==> backend userId ", req.userId);

    try {
      const getSingleRecipe = await Recipe.findOne({
        _id: req.params.id,
        // cratedBy: req.userId,
      });
      console.log("single", getSingleRecipe);

      if (!getSingleRecipe) {
        return res.status(400).json({
          success: false,
          message: "Recipe not found",
        });
      }
      res.status(200).json({
        success: true,
        singleRecipe: getSingleRecipe,
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  }
);
router.delete(
  "/delete/:id",
  authMiddleware,
  async (req: AuthRequest, res: Response) : Promise<any> => {
    try {
      const getSingleRecipe = await Recipe.findOne({
        _id: req.params.id,
        
      });
      // console.log("single", getSingleRecipe);

      if (!getSingleRecipe) {
        return res.status(400).json({
          success: false,
          message: "Recipe not found",
        });
      }


      await getSingleRecipe.deleteOne()
      res.status(200).json({
        success: true,
        message: "Deleted Successfully",
      });
    } catch (e) {
      console.log(e);
      res.status(500).json({
        success: false,
        message: "Something went wrong! Please try again",
      });
    }
  }
);

export default router;
