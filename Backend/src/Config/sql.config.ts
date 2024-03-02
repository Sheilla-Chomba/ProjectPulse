// import mssql from 'mssql'
import dotenv from 'dotenv'

dotenv.config();

console.log(process.env.DB_NAME);


export const sqlConfig = {
    user: "sa",
    password: "Nairobi@2023",
    database: "ProjectPulse",
    server: "DESKTOP-E5BURTF",
    SECRET:"IUTR87GJWEF",

    pool:{
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },

    options:{
        encrypt: false,
        trustServerCertificate: true
    }
}

console.log(sqlConfig);
