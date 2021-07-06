## Description

Tinder lite API Using [Nest](https://github.com/nestjs/nest) framework TypeScript starter repository.

## Database

### Init database

```bash
docker run --name tinder-lite-db \
  -v $(pwd)/db:/docker-entrypoint-initdb.d \
  -p 3306:3306 \
  -e MYSQL_ROOT_PASSWORD=123456 \
  -e MYSQL_DATABASE=tinder \
  -d mariadb:10.4
```

If you want to use your own installed database, just create new database and import all of sql file(s) on `db` directory

### Config database for api

Edit ormconfig.json for suitmatche with your environment (by default, it already match with database initialized by docker command above)

## Install node packages

```bash
npm install
```

## Running the app

```bash
# development
npm run start

# watch mode
npm run start:dev

# production mode
npm run start:prod
```
