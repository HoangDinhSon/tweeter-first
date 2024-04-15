---
runme:
  id: 01HVG6XDT0NN0QRHSK27PHEKJN
  version: v3
---

## Table Content

1. How to run server
2. Directory destructor

## I. How to run server

### step 1 need check server connect data base

* use compass
   - mongodb+srv://hoangdinhson:01687078680@cluster0.n4g5bij.mongodb.net/

* D:\me\node\tweeter-first\src\services\database.services.ts
* check xem  monggodb alas is live
   https://cloud.mongodb.com/v2/6511d555be31065ce2ab53e8#/clusters
* check .env : normall file .env have assensitive so will pople not push env
   so that lack .env ser ver CAN't Run --> connect to admin

if monggodb  connect success

### step 2 : check enviroment window /OS

- window install node >= 20 (check use nvm or control panel of window )

* minimum of node js 18 prefer node js 20. vertion
   to check file package.json.lock
   check all of engine of list

### Step 3

- npm install
- npm list : check all lib is installed
- npm run dev --> run server

---

## II. Directory structure

| STT | name directory | feature                |
| --- | -------------- | ---------------------- |
| 1   | controller     | handle logic  |
| 2   | models         | collections            |
| 3   | services       | query database         |
| 4   | util       | hàm chức năng dùng chung         |

---

## 90 router login

- validater
  D:\me\tweeter-first\src\middlewares\users.middlewares.ts
  USER_NOT_fOUND
  check email
  check password
  file controller
  trong user.midlaware need use email check in database and get user
- sau do truyen user vao req va sang controller
- vao controler lay61 userID truyen vao ham server.login
- tao refreshToken and accestoken tra ve cho nguoi dung
- handle error with
  description err , when meet err we need get information clearle we need follow :
  if (err instance of ErrorWithStatus ){
  res.status(err.status).json9(omit(err, ['status']));
  }
  res.status(HTTP_STATUS.INTERNAL_SERVERERROR).json(omit(err, ['status']))