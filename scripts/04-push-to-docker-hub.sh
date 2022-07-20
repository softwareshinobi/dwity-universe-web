set ex;

reset;

clear;

docker tag dwity-universe softwareshinobi/dwity-universe:latest

docker push softwareshinobi/dwity-universe
docker push softwareshinobi/dwity-universe:latest
