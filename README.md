# FINAL PROJECT 1
## Build a Reflection API

[![N|Solid](https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white)](https://nodejs.org/en/) [![N|Solid](https://img.shields.io/badge/Express.js-404D59?style=for-the-badge)](https://expressjs.com/) [![N|Solid](https://img.shields.io/badge/json%20web%20tokens-323330?style=for-the-badge&logo=json-web-tokens&logoColor=pink)](https://expressjs.com/) [![N|Solid](https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white)](https://expressjs.com/) [![N|Solid](https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white)](https://expressjs.com/)

Membuat aplikasi Reflection yang dimana aplikasi ini digunakan untuk mencatat dan mengukur target - target pencapaian seseorang.

## Group 9

- Setyo Wahyu Trianto --> INJS-KS03-006
- Syamsul Badri Abdullah --> INJS-KS03-012
- Fangki Igo Pramana --> INJS-KS03-023

## Features

- POST /api/v1/users/register -> Registrasi User
- POST /api/v1/users/login -> Login User
- POST /api/v1/users/reflections -> Create Reflection Data
- GET /api/v1/reflections -> Get Own Reflection Data
- PUT /api/v1/reflections/:id -> Edit Own Reflection Data 
- DELETE /api/v1/reflections/:id -> Delete Own Reflection Data

## Tech

- [node.js] - I/O untuk Backend
- [Express] - Framework NodeJS
- [jsonwebtoken] - Autenthication
- [PostgreSQL] - Database

## Installation

App membutuhkan [Node.js](https://nodejs.org/) v16+ untuk dapat berjalan.

Instalasi dependencies lalu jalankan server

```sh
cd finalProject1
npm install
npm run start
```
