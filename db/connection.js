const { createConnection } = require("mysql2/promise");

const conn = await createConnection({
    host: "monorail.proxy.rlwy.net",
    port: 10733,
    user: 'root',
    password: 'Fbf1Cg3D3bB5BCF5gebGAF2d46-3D3-D',
    database: 'railway'
})


export default conn