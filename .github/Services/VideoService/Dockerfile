FROM python:3-alpine3.18
WORKDIR /videoapp
COPY . /videoapp
RUN pip install -r requirements.txt
EXPOSE 5003
CMD python ./app/app.py