set ex;

reset;

clear;

./scripts/01-build-docker-image.sh;
echo "building done";

./scripts/03-login-to-docker-hub.sh;
echo "login to dockerhub done";

./scripts/04-push-to-docker-hub.sh;
echo "push to dockerhub done";

echo "all activities have completed."
