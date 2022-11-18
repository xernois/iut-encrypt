import crypto from "crypto"

const module = {}
module.algorithmes = crypto.getHashes();

module.algorithmes.forEach((algorithme) => {
    module[algorithme] = (password) => crypto.createHash(algorithme).update(password).digest('hex')
    module[`compare${algorithme.split('').map((l, i) => i === 0 ? l.toUpperCase() : l).join('')}`] = (password, hash) => crypto.createHash(algorithme).update(password).digest('hex') === hash
})

export default module