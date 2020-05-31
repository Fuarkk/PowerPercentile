# README

run: docker-compose build
docker-compose run web rails db:create db:migrate db:schema:load db:seed
docker-compose up

visit: 0.0.0.0/5000
