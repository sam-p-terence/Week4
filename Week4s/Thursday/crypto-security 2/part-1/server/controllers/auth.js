const bcrypt = require('bcrypt');
const users = []

module.exports = {
    login: (req, res) => {
      const { username, password } = req.body
      for (let i = 0; i < users.length; i++) {
        if (users[i].username === username) {
          const auth = bcrypt.compareSync(password, users[i].passwordHashed)
          if (auth) {
            let userReturn2 = {...users[i]}
            delete userReturn2.passwordHashed
            res.status(200).send(userReturn2)}
          }
        }
        res.status(400).send("User not here")
    },
    register: (req, res) => {
       const {username, email, firstName, lastName, password} = req.body
        const saltRounds = 10
      bcrypt.hash(password, saltRounds, (err, passwordHashed) => {
        if(!err) {
       let user = {
        username,
        email,
        firstName,
        lastName,
        passwordHashed
       }
       users.push(user)
       let userReturn = {...user}
       delete userReturn.passwordHashed
       res.status(200).send(userReturn)
    } else {
      console.log('Error' + err)
      res.status(400).send("fail")
    }
})}}