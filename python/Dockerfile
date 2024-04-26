#############
# BUILD IMAGE
#############

FROM python:3.10-alpine

WORKDIR /app

RUN python -m venv ./.venv

COPY requirements.txt .
RUN . ./.venv/bin/activate && \
    pip install -r requirements.txt

COPY . .

EXPOSE 8080

CMD [".venv/bin/uvicorn", "spaceship.main:app", "--host=0.0.0.0", "--port=8080"]
