# docker stop $(docker ps -a -q) && docker rm $(docker ps -a -q)
docker run --name tinder-lite-db \
  -v $(pwd)/db:/docker-entrypoint-initdb.d \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e MYSQL_DATABASE=tinder \
  -d mariadb:10.4
