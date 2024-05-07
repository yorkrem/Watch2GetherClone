FROM python:3-alpine3.18
WORKDIR /playlistapp
COPY . /playlistapp
RUN pip install -r requirements.txt
EXPOSE 5000
CMD python ./app/app.py