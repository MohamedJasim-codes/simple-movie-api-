import express from 'express';
import {
    moviecheck,
    moviecollection,
    moviecreation,
    moviedeltion,
    movieupdate
} from "../controllers/movies.controller.js";
const router = express.Router();
router.get('/:id',moviecheck)

router.post("/", moviecreation);

router.get("/",moviecollection );

router.put("/:id",movieupdate );

router.delete("/:id",moviedeltion);


export  default router;
