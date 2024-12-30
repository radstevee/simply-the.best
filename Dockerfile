FROM oven/bun:latest
WORKDIR /app

COPY . .

RUN bun install

ENV HOST=0.0.0.0
ENV PORT=4321
EXPOSE 4321
CMD bun run dev
