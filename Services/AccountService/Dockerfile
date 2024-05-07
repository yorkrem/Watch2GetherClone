FROM python:3-alpine3.18
WORKDIR /accountapp
COPY . /accountapp
RUN pip install -r requirements.txt
EXPOSE 5000
CMD python ./app/app.py