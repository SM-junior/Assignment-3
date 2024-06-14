import dotenv from 'dotenv'

dotenv.config()

export const config = {
    node_dev: 'production',
    port: process.env.PORT,
    db_url: process.env.DB_URL,
    jwt_access_token: process.env.JWT_ACCESS_TOKEN,
    bcrypt_salt_round: process.env.BCRYPT_SALT_ROUNDS,
}

