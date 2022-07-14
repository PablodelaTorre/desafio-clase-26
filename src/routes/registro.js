import { Router } from "express";

const router = Router();

const usuarios = []

router.get("/", (req, res) => {
    res.render("./partials/registro");
});

router.post("/", (req, res) => {
    if (usuarios.some(usuario=>usuario.nombre===req.body.nombre)){
        return res.render("./partials/errorRegistro")
    }
    usuarios.push(req.body)
    res.render("./partials/login")
});


export default router;