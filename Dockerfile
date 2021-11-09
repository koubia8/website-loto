FROM node:14.15.0-alpine as builder

WORKDIR /build
COPY . ./
RUN npm install 
RUN gridsome build

FROM nginx:stable-alpine
COPY ./dist /usr/share/nginx/html
RUN rm /etc/nginx/conf.d/default.conf
COPY ./nginx/nginx.conf /etc/nginx/conf.d
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]