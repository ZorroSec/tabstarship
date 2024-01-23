import mysql from "mysql2"

export default function createConnection(){
    const connection = mysql.createConnection({
        host: "monorail.proxy.rlwy.net",
        port: 10733,
        user: "root",
        password: "Fbf1Cg3D3bB5BCF5gebGAF2d46-3D3-D",
        database: "railway"
    })
    return connection
}