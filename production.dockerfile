FROM node:11.10 as base
WORKDIR /app
ADD ./ ./
RUN yarn && yarn build

FROM nginx as production
COPY --from=base /app/dist /usr/share/nginx
