# test-containers

Test containers playground

## Test

```sh
curl -X GET http://localhost:5000/cats -v

curl -X GET http://localhost:5000/cats/1 -v

curl -X POST http://localhost:5000/cats -d '{ "name": "Mike", "age": 5 }' -H "Content-Type: application/json" -v

curl -X PATCH http://localhost:5000/cats/1 -d '{ "name": "Blue" }' -H "Content-Type: application/json" -v

curl -X DELETE http://localhost:5000/cats/1 -d '{ "name": "Blue" }' -H "Content-Type: application/json" -v
```
