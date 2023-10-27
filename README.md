### Table Content

## how to run server 
### step 1 need check server connect data base 
* use compass 
mongodb+srv://hoangdinhson:01687078680@cluster0.n4g5bij.mongodb.net/
* D:\me\node\tweeter-first\src\services\database.services.ts
* check xem  monggodb alas is live 
https://cloud.mongodb.com/v2/6511d555be31065ce2ab53e8#/clusters
* check .env : normall file .env have assensitive so will pople not push env 
so that lack .env ser ver CAN't Run --> connect to admin 

if monggodb  connect success 
### step 2 : check enviroment window /OS
 window install node >= 20 (check use nvm or control panel of window )
 * minimum of node js 18 prefer node js 20. vertion
 to check file package.json.lock 
 check all of engine of list 
### After step 2 
 run server : npm run dev check  


73 is process

---

### Install lib necessary

---

### Directory structure

| STT | name directory | feature                |
| --- | -------------- | ---------------------- |
| 1   | controller     | handle logic  |
| 2   | models         | collections            |
| 3   | services       | query database         |
| 4   | util       | hàm chức năng dùng chung         |

---