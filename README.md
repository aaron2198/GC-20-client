# GC-20 Client

A react web app that allows a reading data from GC-20 on your local network.

## Setup
* Install Docker
* Build GC-20 and flash with latest firmware
* Connect GC-20 to the same network your computer is on.
* Start the webserver, run the following from the root of this repository.
    * `docker-compose up -d`
* Go to the [frontend](http://localhost:3000)
* Enter devices IP and hit apply.
