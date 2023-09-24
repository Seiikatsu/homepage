FROM oven/bun:latest as base

FROM base as deps

WORKDIR /app

COPY package.json bun.lockb ./
RUN bun install --frozen-lockfile

FROM base as build

RUN mkdir /app
WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules

COPY . .
RUN bun run build

FROM base

ENV NODE_ENV production

WORKDIR /app

COPY --from=deps /app/node_modules /app/node_modules
COPY --from=build /app/build /app/build
COPY --from=build /app/public /app/public
ADD . .

CMD ["bun", "start"]
