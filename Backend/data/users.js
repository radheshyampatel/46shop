import bcrypt from "bcryptjs"

const users = [
    {
        name: "Admin User",
        email: "admin@example.com",
        password: bcrypt.hashSync("123456", 10),
        isAdmin: true
    },
    {
        name: "kalpesh paatel",
        email: "sb@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    },
    {
        name: "Alen Colins",
        email: "ac@gmail.com",
        password: bcrypt.hashSync("123456", 10)
    }
]

export default users