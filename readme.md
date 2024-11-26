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