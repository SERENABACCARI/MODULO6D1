import express from 'express';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const usersRouter = express.Router();


const registeredUser = {
    id: 1,
    username: 'utente',
    password: '$2b$10$9kQz99ZV6YEvDwD6fnTWku5aWAB3F/7/bvHxt7sccHzoFClfnEi7u' // Hash della password "passwordsegreta"
};

// POST 
usersRouter.post('/login', async (req, res) => {
    const { username, password } = req.body;

   
    try {
        const passwordMatch = await bcrypt.compare(password, registeredUser.password);

        if (username === registeredUser.username && passwordMatch) {
            // token 
            const token = jwt.sign({ id: registeredUser.id, username }, process.env.jwt_secret, { expiresIn: '1h' });

            
            res.json({ token });
        } else {
            res.status(401).json({ message: 'Credenziali non valide' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Errore durante la verifica delle credenziali' });
    }
});

export default usersRouter;
