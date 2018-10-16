FROM nginx:alpine
EXPOSE 80
COPY /dist/filereader/. /usr/share/nginx/html



