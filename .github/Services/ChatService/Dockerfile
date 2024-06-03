FROM python:3-alpine3.18
WORKDIR /chatapp
COPY . /chatapp
RUN pip install -r requirements.txt
EXPOSE 5001
CMD python ./app/app.py