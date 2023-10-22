run(){
    docker-compose -f docker-compose.yml -f docker-compose.computeplane.dev.yml up -d
}

if [ "$1" == "start:dev" ]
then
    run
    exit
fi