FROM ubuntu:18.04
RUN pip3 install -r requirements.txt
RUN apt-get install fceux