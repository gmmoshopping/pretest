### Coding pretest Full Stack Developer / Bankend / Software Engineer
- ติดตั้ง MySQL Database
- ทำการดาวน์โหลด Dataset ชื่อชุดข้อมูล "ข้อมูลเมล็ดพันธุ์ข้าวที่มีจำหน่าย"
- ทำการเขียนโปรแกรมด้วยภาษาที่ท่านถนัดเพื่อทำการอ่านไฟล์ Dataset แล้ว Import ข้อมุลเข้าไปที่ MySQL
- ทำการเขียนโปรแกรมด้วยภาษาที่ท่านถนัด (ยกเว้น PHP) โดยพัฒนาเป็น Web Application เพื่อเชื่อมต่อ Database MySQL แล้วนำค่ามาแสดงผลบน Web Application ในลักษณะ Dashboard โดยมีเนื้อหาใน Dashboard ที่ประกอบด้วย กราฟประเภทต่างๆ เช่น Pie Graph, Line Graph, Table และแผนที่ ให้แสดงมากที่สุดเท่าที่จะทำได้
- อื่นๆ ถ้าท่านสามารถทำ function เพิ่มความน่าสนใจได้มากเท่าไหร่จะได้คะแนนพิเศษ
- Demo สิ่งที่ท่านพัฒนา ตั้งแต่ข้อ 1 ถึงข้อ 4 พร้อมอธิบายเทคนิค วิธีการพัฒนา และเครื่องมือที่ท่านใช้

### Folder Structure for API
#### Backend Devlop
- Folder logs : เก็บ logs ที่เป็นทำ Log rotation  แยกตาม info , warn , error
- config : เก็บการกำหนดค่าของระบบทั้งหมด เพื่ออนาคตต้องมีการกำหนดหลายอย่างที่ไม่เกี่ยวกัวการ ต่อฐานข้อมูล ที่เก็บ path file 
- controller : เก็บส่วนที่จัดการเรื่อง controller 
- middleware : จะใช้สำหรับกรณีที่ต้องการเขียน library ไว้ใข้เองในระบบ
- model : จะใช้เก็บเรื่องการจัดการของ model
- router : จะเอาไว้จัดการเรื่อง router ต่าง
- schema : จะเอาไว้เก็บ schema database ทั้งระบบ

### Object Relational Mapping (ORM) จัดการฐานข้อมูล
- sequelize

### Git Clone Master for appove
```
git clone https://github.com/noom1009/pretest.git
```

### Import CSV to Database MySQL by golang 
```
cd goImport
go install github.com/go-sql-driver/mysql@latest
go run .
```

### Backend create by nodejs by javascript
- install package nodejs by yarn
```
yarn add swagger-ui-express dotenv cors path cookie-parser express-session base64url body-parser express http nodemon pm2 express sequelize mysql2 jsonwebtoken geoip-lite external-ip winston 
```
- install package nodejs by npm
```
npm install swagger-ui-express dotenv cors path cookie-parser express-session base64url body-parser express http nodemon pm2 express sequelize mysql2 jsonwebtoken geoip-lite external-ip winston
```

### Synchronize Sequence Diagrams and Architecture Models
- File: backend/src/config/index.js  set ModelSynchronization : true ? flase

### Json format Example
```
{
    "_id":1,	
    "Seed_RepDate":25640623,	
    "Seed_Year":2564,	
    "Seeds_YearWeek":26,	
    "Seed_Varity":"กข15",	
    "Seed_RDCSD":"พะเยา",	
    "Seed_Stock2Sale":28675,
    "Seed_Season":1 ,
    "Seed_Crop_Year":2564
}
```
### Document API URL By Swagger
- http://localhost:4000/api-docs/
![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/swagger.png)

### Example test
- install package Open Source Javascript Testing Framework by Jestjs  , Supertest คือ Node.js library ที่ Provide High-level Fluent API ให้เราสามารถทำ API Testing ได้อย่างง่ายๆ
```
npm install --save-dev jest
npm install  --save-dev supertest
```
![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/testcase.png)

### Frontend create by vuejs 
```
vue create frontend
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
npx tailwindcss init -p
```
#### In the tailwind.config.js file,
- replace purge: []
- with purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}']
- In the main.js file (in src folder), import index.css

![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/frontend1.png)
![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/frontend2.png)

### CRUD Application
![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/crud.png)
![ScreenShot](https://github.com/noom1009/pretest/blob/main/doc/table.png)

### docker
```
docker-compose up -d
```