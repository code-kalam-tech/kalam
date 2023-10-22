stop(){
    docker-compose -f docker-compose.yml -f docker-compose.computeplane.dev.yml down

    if [[ "$(docker images -q kalam-kalam-react 2> /dev/null)" != "" ]]; then
        docker rmi kalam-kalam-react
    fi
}


if [ "$1" == "stop:dev" ]
then
    stop
    exit
fi