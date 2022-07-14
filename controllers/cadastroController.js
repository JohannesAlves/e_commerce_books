<<<<<<< HEAD
=======
const User = require('../database/User');
const bcrypt = require('bcrypt');




>>>>>>> sprint-5
const cadastro = {
    registro: (req, res) => {
        res.render('cadastro')
    },
    criarRegistro:(req, res)=>{
<<<<<<< HEAD
        console.log(req.body);
        res.redirect('/cadastro/cadastroFeito')
    },
    guardarRegistro:(req,res)=>{
        res.render('cadastroFeito')
        
    }
=======
            let userToCreate = {
                nome: req.body.nome,
                sobrenome: req.body.sobrenome,
                email: req.body.email,
                cpf: req.body.cpf,
                dataNascimento: req.body.data,
                senha: bcrypt.hashSync(req.body.senha, 12)
            }
            
            // Criando usuário com base em nosso models User
            let userCreated = User.create(userToCreate);

            res.redirect('/user/login')

    },
>>>>>>> sprint-5

}

module.exports = cadastro;