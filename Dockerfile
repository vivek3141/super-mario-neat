FROM ubuntu:18.04
RUN apt-get install python3
RUN pip3 install -r requirements.txt
RUN apt-get install fceux