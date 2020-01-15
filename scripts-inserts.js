scripts{
    "dev": "nodemon --ignore './sessions/' index.js",
    "db:delete": "dropdb fullstack-pets",
    "db:create": "createdb fullstack-pets",
    "db:schema": "psql -f schema.sql fullstack-pets",
    "db:seed": "psql -f seed.sql fullstack-pets",
    "db:reset": "npm run db:delete && npm run db:create && npm run db:schema && npm run db:seed",
}