## How to Run DB

### Prerequisite
* Docker
* Ensure Docker Daemon is Running

### Instructions
1. Run PostgreSQL Docker Container
```bash
$ docker run --name pg -e POSTGRES_PASSWORD=mysecretpassword -p 5432:5432 -d postgres
```
2. Connect to Running PosgreSQL Container
```bash
$ docker exec -it pg bash
```
3. You should be inside container cli. Run the following commands.
```bash
root@SOME_RANDOM_STRING# psql -U postgres
postgres# CREATE DATABASE toloa;
```

4. Duplicate & Rename 'example.ormconfig.json' to 'ormconfig.json' and fill in values.
5. Run NestJS Application.
  

