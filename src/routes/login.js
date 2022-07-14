import { Router } from "express";
import { usuarios } from "./registro.js";

const router = Router();

router.get("/", (req, res) => {
    res.render("./partials/login");
});

router.post("/", (req, res) => {
    const usuario = usuarios.find(usuario=>usuario.nombre===req.body.nombre)
    if(usuario){
        for (const key in req.body){
            req.session[key] = req.body[key]
        }
        res.redirect('/')
    } else {
        res.render('./partials/errorLogin')
    }
    
    // const { nombre } = req.body;
    // console.log(nombre);
    // req.session.nombre = nombre;
    // res.redirect("/");
});


export default router;