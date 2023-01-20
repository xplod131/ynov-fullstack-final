import jwt from 'jsonwebtoken';
import axios from 'axios';
export const LoggedUserMiddleware = (req, res, next) => {
    // Remplacer req.uri par req.url
    const bypassVerification = ["/api", "/api/.user/hello", "/api/.user/login", "/api/.user/inscription"];

    if(!bypassVerification.includes(req.url)) {

        const authHeader = req.headers['authorization'];
        const token = authHeader && authHeader.split(' ')[1];

        if (!token) {
            res.status(401).json("A token is required for authentication");
            return; // Ajouter un return pour empêcher l'exécution de la suite de la fonction
        }

        axios.defaults.headers.common = {'Authorization': `bearer ${token}`}
/*        try {
            const decoded = jwt.verify(token, process.env.API_TOKEN_USER);
            const decode = jwt.decode(token);
            console.log(decode);
            req.verifyUserExist = decoded;
        } catch (err) {
            res.status(401).send('Invalid token')
            return; // Ajouter un return pour empêcher l'exécution de la suite de la fonction
        }*/

    }
    next();
}