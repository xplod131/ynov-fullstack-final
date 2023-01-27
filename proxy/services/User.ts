import axios from 'axios';
import dotenv from 'dotenv';
import {Express, Request, Response} from "express";

module.exports = (app: Express) => {

    app.get("/api/.user/hello", (_: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/hello").then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/user", (_: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/user").then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/users", (_: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/users").then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/admin", (_: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/admin").then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/future-users", (_: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/future-users").then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.post("/api/.user/login", (req: Request, res: Response) => {
        axios.post(process.env.API_URL_USER + "/api/login_check", req.body).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.post("/api/.user/inscription", (req: Request, res: Response) => {
        axios.post(process.env.API_URL_USER + "/api/inscription/", req.body).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.post("/api/.user/validate-user/:id", (req: Request, res: Response) => {
        axios.post(process.env.API_URL_USER + "/api/inscription/validate-user/" + req.params.id).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/users/:id", (req: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/users/" + req.params.id).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.user/future-users/:id", (req: Request, res: Response) => {
        axios.get(process.env.API_URL_USER + "/api/future-users/" + req.params.id).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.post("/api/.user/check_role", (req: Request, res: Response) => {
        axios.post(process.env.API_URL_USER + "/api/user/check_role", req.body).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.get("/api/.car", (req: Request, res: Response) => {
        axios.get(process.env.API_URL_CAR).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            console.log(e)
            res.send(e.response.data);
        });
    });

    app.post("/api/.car/add", (req: Request, res: Response) => {

        console.log("BODY : ", req.body);

        axios.post(process.env.API_URL_CAR + "/add", req.body, {
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

    app.post("/api/.car/delete/:id", (req: Request, res: Response) => {
        axios.delete(process.env.API_URL_CAR + "/delete/" + req.params.id).then((onfulfilled) => {
            res.send(onfulfilled.data);
        }).catch(e => {
            res.send(e.response.data);
        });
    });

}