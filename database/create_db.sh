#!/bin/bash
set -e

psql -v ON_ERROR_STOP=1 --username "$POSTGRES_USER" --dbname "$POSTGRES_DB" <<-EOSQL
  CREATE DATABASE node_boilerplate_db;
  GRANT ALL PRIVILEGES ON DATABASE node_boilerplate_db TO postgres;
EOSQL
