#FROM oven/bun:latest as build

#WORKDIR /app

#COPY package.json .

#RUN bun install

#COPY . .

#RUN bun run build

#FROM nginx:alpine AS runtime

#COPY ./nginx.conf /etc/nginx/nginx.conf
#COPY --from=build /app/dist /usr/share/nginx/html

#EXPOSE 8080



FROM oven/bun:latest as build
WORKDIR /app
COPY package.json .
RUN bun install
COPY . .
RUN bun run build

FROM nginx:alpine AS runtime
# Change this line:
COPY ./nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 8080
