FROM golang:1.12.9
RUN mkdir /app
ADD . /app/
WORKDIR /app
RUN go mod download
RUN go build .
CMD ["/app/realtime-chat-go-react"]
