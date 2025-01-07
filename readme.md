# --------------Technology----------

## Node js,

## express js,

## mongoose,

## Typescript,

## Zod for validation

# postman link: https://dark-space-978005.postman.co/workspace/New-Team-Workspace~db451836-9ce1-4ebd-9484-7ea3691f0cb4/collection/16433427-1a447354-a414-4c78-a00b-7dda5aa1071b?action=share&creator=16433427

# ER- Diagram Link : https://drive.google.com/drive/folders/1KNW2ndqmLFXGH7OreuXNkoLMy6dW7QAJ?usp=sharing

# updated

# live link : https://bus-ticket-server-azure.vercel.app

# Authentication route =>

## 1. user registration : post: https://bus-ticket-server-azure.vercel.app/auth/register

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
"\_id": "6745b3e05d305c3120620371",
"name": "Mr. Admin",
"email": "admin@gmail.com",
"phone": "+1234567890",
"role": "Admin",
"createdAt": "2024-11-26T11:41:20.617Z",
"updatedAt": "2024-11-26T11:41:20.617Z",
"\_\_v": 0
}
}

## 1. user login : post: https://bus-ticket-server-azure.vercel.app/auth/login

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
"\_id": "6745b3e05d305c3120620371",
"name": "Mr. Admin",
"email": "admin@gmail.com",
"phone": "+1234567890",
"role": "Admin",
"createdAt": "2024-11-26T11:41:20.617Z",
"updatedAt": "2024-11-26T11:41:20.617Z",
"\_\_v": 0
}
}
## 1. user login : post: https://bus-ticket-server-azure.vercel.app/auth/logout

### input =>

### output=>
{
    "success": true,
    "message": "User Logout successfully",
    "data": ""
}

# need JWT token in hearders: "Bearer secret_token"

# Bus route by admin =>

## 1.bus added: - POST https://bus-ticket-server-azure.vercel.app/admin/bus

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
"\_id": "6745f120d9c7afe90f915784",
"createdAt": "2024-11-26T16:02:40.416Z",
"updatedAt": "2024-11-26T16:02:40.416Z",
"\_\_v": 0
}
}

## 1.bus update :- PUT https://bus-ticket-server-azure.vercel.app/admin/bus/:id

### input =>

{

"price": 2000
}

### Output=>

{
"success": true,
"message": "Bus updated successfully",
"data": {
"\_id": "6745f120d9c7afe90f915784",
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
"\_\_v": 0
}
}

## 1.bus update :- DELETE https://bus-ticket-server-azure.vercel.app/admin/bus/:id

### input => /admin/bus/6745f120d9c7afe90f915784

### Output=>

{
"success": true,
"message": "Bus deleted successfully",
"data": {
"\_id": "6745f120d9c7afe90f915784",
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
"\_\_v": 0
}
}

## 1.Ticket created :- POST https://bus-ticket-server-azure.vercel.app/admin/ticket:

### input =>

{
"busId": "6745f69a9a3675d2d27f51f3",
"seatNumber": "A2",
"status": "available",
"travelDate": "2024-12-10"
}

### Output=>

{
"success": true,
"message": "Ticket created successfully",
"data": {
"busId": "6745f69a9a3675d2d27f51f3",
"seatNumber": "A2",
"status": "available",
"travelDate": "2024-12-10",
"\_id": "674695b3963a874b4c5112c2",
"createdAt": "2024-11-27T03:44:51.914Z",
"updatedAt": "2024-11-27T03:44:51.914Z",
"\_\_v": 0
}
}
## 1.Ticket update :- - PUT https://bus-ticket-server-azure.vercel.app/admin/ticket/674695a4963a874b4c5112be: 

### input =>
{
  "seatNumber": "B1"
}

### Output=>

{
    "success": true,
    "message": "Ticket updated successfully",
    "data": {
        "_id": "674695a4963a874b4c5112be",
        "busId": "6745f0f0d9c7afe90f91577e",
        "seatNumber": "B1",
        "status": "available",
        "travelDate": "2024-12-10",
        "createdAt": "2024-11-27T03:44:36.698Z",
        "updatedAt": "2024-11-27T04:12:19.283Z",
        "__v": 0
    }
}

## 1.Ticket delete :-  DELETE: https://bus-ticket-server-azure.vercel.app/admin/ticket/674695a4963a874b4c5112be: 

### input =>

### Output=>
{
    "success": true,
    "message": "Ticket deleted successfully",
    "data": {
        "_id": "674695a4963a874b4c5112be",
        "busId": "6745f0f0d9c7afe90f91577e",
        "seatNumber": "B1",
        "status": "available",
        "travelDate": "2024-12-10",
        "createdAt": "2024-11-27T03:44:36.698Z",
        "updatedAt": "2024-11-27T04:12:19.283Z",
        "__v": 0
    }
}

# User  Bus services 

## get available buses : - GET https://bus-ticket-server-azure.vercel.app/buses: View all available buses.
### output =>
{
    "success": true,
    "message": "Available buses got successfully",
    "data": [
        {
            "_id": "6745f0f0d9c7afe90f91577e",
            "busName": "GreenLine Express",
            "busNumber": "GL12345",
            "from": "Dhaka",
            "to": "Chittagong",
            "departureTime": "2024-12-01T09:00:00",
            "arrivalTime": "2024-12-01T15:00:00",
            "totalSeats": 40,
            "availableSeats": 25,
            "price": 1500,
            "available": true,
            "createdAt": "2024-11-26T16:01:52.322Z",
            "updatedAt": "2024-11-26T16:01:52.322Z",
            "__v": 0
        }
    ]
}
##  - GET: https://bus-ticket-server-azure.vercel.app/buses?from=dhaka&to=chitt
## and also alow filtering from - to destination; if not filtering from to then show only available buses
### output =>
{
    "success": true,
    "message": "Available buses got successfully",
    "data": [
        {
            "_id": "6745f0f0d9c7afe90f91577e",
            "busName": "GreenLine Express",
            "busNumber": "GL12345",
            "from": "Dhaka",
            "to": "Chittagong",
            "departureTime": "2024-12-01T09:00:00",
            "arrivalTime": "2024-12-01T15:00:00",
            "totalSeats": 40,
            "availableSeats": 25,
            "price": 1500,
            "available": true,
            "createdAt": "2024-11-26T16:01:52.322Z",
            "updatedAt": "2024-11-26T16:01:52.322Z",
            "__v": 0
        }
    ]
}

# User  Ticket services 

## get available buses : - GET https://bus-ticket-server-azure.vercel.app/tickets: View all available tickets.

### output =>
{
    "success": true,
    "message": "Available ticket got successfully",
    "data": [
        {
            "_id": "674695b3963a874b4c5112c2",
            "busId": {
                "_id": "6745f69a9a3675d2d27f51f3",
                "busName": "Shyamoli Paribahan",
                "busNumber": "SP67891",
                "from": "Dhaka",
                "to": "Cox's Bazar",
                "departureTime": "2024-12-02T08:30:00",
                "arrivalTime": "2024-12-02T18:30:00",
                "totalSeats": 50,
                "availableSeats": 10,
                "price": 1800,
                "available": true,
                "createdAt": "2024-11-26T16:26:02.407Z",
                "updatedAt": "2024-11-26T16:26:02.407Z",
                "__v": 0
            },
            "seatNumber": "A2",
            "status": "available",
            "travelDate": "2024-12-10",
            "createdAt": "2024-11-27T03:44:51.914Z",
            "updatedAt": "2024-11-27T03:44:51.914Z",
            "__v": 0
        }
    ]
    .................
}
##  - GET https://bus-ticket-server-azure.vercel.app/tickets?busId=6745f69a9a3675d2d27f51f3&travelDate=2024-12-10
## and also alow find ticket by specific bus id or travel data
### output =>
{
    "success": true,
    "message": "Available ticket got successfully",
    "data": [
        {
            "_id": "674695b3963a874b4c5112c2",
            "busId": {
                "_id": "6745f69a9a3675d2d27f51f3",
                "busName": "Shyamoli Paribahan",
                "busNumber": "SP67891",
                "from": "Dhaka",
                "to": "Cox's Bazar",
                "departureTime": "2024-12-02T08:30:00",
                "arrivalTime": "2024-12-02T18:30:00",
                "totalSeats": 50,
                "availableSeats": 10,
                "price": 1800,
                "available": true,
                "createdAt": "2024-11-26T16:26:02.407Z",
                "updatedAt": "2024-11-26T16:26:02.407Z",
                "__v": 0
            },
            "seatNumber": "A2",
            "status": "available",
            "travelDate": "2024-12-10",
            "createdAt": "2024-11-27T03:44:51.914Z",
            "updatedAt": "2024-11-27T03:44:51.914Z",
            "__v": 0
        }
    ]
}

# User  Ticket Purchase ticket
# need authorization token send : "bearer secretToken"
## routes :GET - https://bus-ticket-server-azure.vercel.app/tickets/purchase

## input =>
{
  "userId": "6745b3e05d305c3120620371",
  "ticketId": "674695b3963a874b4c5112c2",
  "busId": "6745f69a9a3675d2d27f51f3"
}

### output =>
{
    "success": true,
    "message": "Ticket Purchases successfully",
    "data": {
        "userId": "6745b3e05d305c3120620371",
        "ticketId": "674695b3963a874b4c5112c2",
        "busId": "6745f69a9a3675d2d27f51f3",
        "status": "pending",
        "_id": "6746bed96eab3dafbc764ad8",
        "purchaseDate": "2024-11-27T06:40:25.642Z",
        "createdAt": "2024-11-27T06:40:25.668Z",
        "updatedAt": "2024-11-27T06:40:25.668Z",
        "__v": 0
    }
}