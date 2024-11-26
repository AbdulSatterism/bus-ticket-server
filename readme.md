# --------------Technology----------
## Node js,
## express js,
## mongoose,
## Typescript,
## Zod for validation


# Authentication route =>

## 1. user registration : post:  /auth/register 
### input =>
{
  "name": "Mr. Admin",
  "password": "123456",
  "email": "admin@gmail.com",
  "phone": "+1234567890",
  "role": "Admin"
}

### output=>
 {
    "success": true,
    "message": "User registered successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ1YjNlMDVkMzA1YzMxMjA2MjAzNzEiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTczMjYyMTI4MSwiZXhwIjoxNzMyNjI0ODgxfQ.wuVyDV7qCphNLSuQfnmDMQSYFkFP3YXJ-4T_5WYa_dU",
    "data": {
        "_id": "6745b3e05d305c3120620371",
        "name": "Mr. Admin",
        "email": "admin@gmail.com",
        "phone": "+1234567890",
        "role": "Admin",
        "createdAt": "2024-11-26T11:41:20.617Z",
        "updatedAt": "2024-11-26T11:41:20.617Z",
        "__v": 0
    }
}

## 1. user login : post:  /auth/login 
### input =>
{
    "email":"admin@gmail.com",
    "password":"123456"
}

### output=>
 {
    "success": true,
    "message": "User login successfully",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NzQ1YjNlMDVkMzA1YzMxMjA2MjAzNzEiLCJyb2xlIjoiQWRtaW4iLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTczMjYyMjU2MiwiZXhwIjoxNzMyNjI2MTYyfQ.ZIQtldt1xifIola3_nIbHvlTIeY0aApUbAIL0cmsoCg",
    "data": {
        "_id": "6745b3e05d305c3120620371",
        "name": "Mr. Admin",
        "email": "admin@gmail.com",
        "phone": "+1234567890",
        "role": "Admin",
        "createdAt": "2024-11-26T11:41:20.617Z",
        "updatedAt": "2024-11-26T11:41:20.617Z",
        "__v": 0
    }
}

# need JWT token in hearders: "Bearer secret_token"

# Bus route by admin =>

## 1.bus added: - POST /admin/bus
### input =>
{
  "busName": "Shyamoli Paribahan",
  "busNumber": "SP67890",
  "from": "Dhaka",
  "to": "Cox's Bazar",
  "departureTime": "2024-12-02T08:30:00",
  "arrivalTime": "2024-12-02T18:30:00",
  "totalSeats": 50,
  "availableSeats": 10,
  "price": 1800,
  "available":true
}

### output=>
 {
    "success": true,
    "message": "Bus created successfully",
    "data": {
        "busName": "Shyamoli Paribahan",
        "busNumber": "SP67890",
        "from": "Dhaka",
        "to": "Cox's Bazar",
        "departureTime": "2024-12-02T08:30:00",
        "arrivalTime": "2024-12-02T18:30:00",
        "totalSeats": 50,
        "availableSeats": 10,
        "price": 1800,
        "available": true,
        "_id": "6745f120d9c7afe90f915784",
        "createdAt": "2024-11-26T16:02:40.416Z",
        "updatedAt": "2024-11-26T16:02:40.416Z",
        "__v": 0
    }
}

## 1.bus update :- PUT /admin/bus/:id 
### input =>
{
 
  "price": 2000
}


### Output=>
{
    "success": true,
    "message": "Bus updated successfully",
    "data": {
        "_id": "6745f120d9c7afe90f915784",
        "busName": "Shyamoli Paribahan",
        "busNumber": "SP67890",
        "from": "Dhaka",
        "to": "Cox's Bazar",
        "departureTime": "2024-12-02T08:30:00",
        "arrivalTime": "2024-12-02T18:30:00",
        "totalSeats": 50,
        "availableSeats": 10,
        "price": 2000,
        "available": true,
        "createdAt": "2024-11-26T16:02:40.416Z",
        "updatedAt": "2024-11-26T16:19:09.530Z",
        "__v": 0
    }
}

## 1.bus update :- DELETE /admin/bus/:id 
### input => /admin/bus/6745f120d9c7afe90f915784

### Output=>
{
    "success": true,
    "message": "Bus deleted successfully",
    "data": {
        "_id": "6745f120d9c7afe90f915784",
        "busName": "Shyamoli Paribahan",
        "busNumber": "SP67890",
        "from": "Dhaka",
        "to": "Cox's Bazar",
        "departureTime": "2024-12-02T08:30:00",
        "arrivalTime": "2024-12-02T18:30:00",
        "totalSeats": 50,
        "availableSeats": 10,
        "price": 2000,
        "available": true,
        "createdAt": "2024-11-26T16:02:40.416Z",
        "updatedAt": "2024-11-26T16:19:09.530Z",
        "__v": 0
    }
}
## 1.Ticket created :- POST /admin/ticket: 
### input => 
{
  "busId": "6745f69a9a3675d2d27f51f3",
  "seatNumber": "A1",
  "status": "available"
}

### Output=>
{
    "success": true,
    "message": "Ticket created successfully",
    "data": {
        "busId": "6745f69a9a3675d2d27f51f3",
        "seatNumber": "A1",
        "status": "available",
        "_id": "6746017cd5a630133fa77ce2",
        "__v": 0
    }
}