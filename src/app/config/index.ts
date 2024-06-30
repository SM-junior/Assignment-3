import dotenv from 'dotenv'

dotenv.config()

export const config = {
    node_dev: process.env.NODE_ENV,
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    jwt_refresh_token: process.env.JWT_REFRESH_TOKEN,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
}

