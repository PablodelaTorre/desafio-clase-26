import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
    res.render("./partials/login");
});

router.post("/", (req, res) => {
    const { nombre } = req.body;
    console.log(nombre);
    req.session.nombre = nombre;
    res.redirect("/");
});


export default router;