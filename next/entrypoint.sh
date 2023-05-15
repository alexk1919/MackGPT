#!/bin/env sh

# copy .env file if not exists
[ ! -f .env ] && [ -f .env.example ] && cp .env.example .env
source .env

# Ensure DB is available before running Prisma commands
./wait-for-db.sh db 3306

# Run Prisma commands
if [[ ! -f "/app/prisma/${DATABASE_URL:5}" ]]; then
  npx prisma migrate dev --name init
  npx prisma db push
fi

# Generate Prisma client
npx prisma generate

# run cmd
exec "$@"
