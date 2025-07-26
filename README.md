# 🧑‍💻 Customer & Case Management API

This is a backend customer and case management system built with **Node.js**, **Express**,and  **MongoDB**. It includes user authentication.

---

## 🚀 Features

- User Registration & Login (JWT-based)
- Protected routes using middleware
- CRUD operations for Customers
- CRUD operations for Cases
- MongoDB + Mongoose integration

---

## ⚙️ Tech Stack

- Backend: Node.js, Express
- Database: MongoDB + Mongoose
- Auth: JWT (JSON Web Token)





 ## sample data of user
 ----------------------------
 {
  "username": "testuser",
  "password": "123456"
 }
 Method    Endpoint                   Description   
 --------------------------------------------------
 POST    /api/users/register           User register 
 POST    /api/users/login              Useer login   

 ## sample data of customer crud operation
 {
     "name": "jhon",
     "contact_info": "jhon@gmail.com",
     "status": "active",
 }
 Method    Endpoint                   Description   
 --------------------------------------------------
 GET    /api/customers                  Get all customer
 POST   /api/customers                  Add new  customer
 patch  /api/customers/id               partial update
 delete /api/customers/id               delete customer



 ## sample data of case crud operation
 {
  "customer_id": "64bc87e3f32a7a001fabe123",
  "priority": "High",
  "status": "Open"
}

 Method    Endpoint                   Description   
 --------------------------------------------------
 GET    /api/cases                 Get all cases
 POST   /api/case                  Add new  case
 delete /api/cases/id              delete case


sucessful screenshot saved in image folder



