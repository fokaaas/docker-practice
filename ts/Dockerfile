############
# COMPILE TS
############

FROM node:22-slim AS builder

WORKDIR /app

RUN npm install -g pnpm @vercel/ncc

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .
RUN ncc build src/index.ts -o build

###################
# BUILD FINAL IMAGE
###################

FROM node:22-slim

WORKDIR /app

COPY --from=builder /app/build/ .

ENTRYPOINT ["node", "index.js"]
