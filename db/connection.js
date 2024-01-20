const { createConnection } = require("mysql2/promise");

const conn = createConnection({
    host: "viaduct.proxy.rlwy.net",
    port: 40008,
    user: 'railway',
    password: 'pV9P_zjyP8Wx147UW8NAvbffHlRO~NP.',
    database: 'railway'
})


export default conn