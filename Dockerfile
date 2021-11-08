FROM node:14.15.0-alpine as builder

WORKDIR /build
COPY . ./
RUN npm install 
RUN gridsome build

FROM nginx:stable-alpine
COPY --from=builder /build/dist /usr/share/nginx/html/
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]