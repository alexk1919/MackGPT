#!/bin/bash
cd "$(dirname "$0")" || exit

is_valid_sk_key() {
  local api_key=$1
  local pattern="^sk-[a-zA-Z0-9]{48}$"
  [[ $api_key =~ $pattern ]] && return 0 || return 1
}

echo -n "Enter your OpenAI Key (eg: sk...) or press enter to continue with no key: "
read OPENAI_API_KEY

if is_valid_sk_key $OPENAI_API_KEY || [ -z "$OPENAI_API_KEY" ]; then
  echo "Valid API key"
else
  echo "Invalid API key. Please ensure that you have billing set up on your OpenAI account"
  exit
fi

NEXTAUTH_SECRET=$(openssl rand -base64 32)

ENV="NODE_ENV=development\n\
NEXTAUTH_SECRET=$NEXTAUTH_SECRET\n\
NEXTAUTH_URL=http://localhost:3000\n\
NEXT_PUBLIC_BACKEND_URL=http://localhost:3000\n\
OPENAI_API_KEY=$OPENAI_API_KEY\n\
DATABASE_URL=file:../db/db.sqlite\n"

cd next
printf $ENV > .env
printf $ENV > .env.docker


if [ "$1" = "--docker" ]; then
  source .env.docker
  docker build --build-arg NODE_ENV=$NODE_ENV -t agentgpt .
  docker run -d --name agentgpt -p 3000:3000 -v $(pwd)/db:/app/db agentgpt
elif [ "$1" = "--docker-compose" ]; then
  cd ..
  docker-compose up -d --remove-orphans
else
  ./prisma/useSqlite.sh
  npm install
  prisma db push
  npm run dev
fi
