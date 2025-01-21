const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const path = require('path')

const db = require('./server/config/db')
const app = express();

// Connect to MongoDB
db.connect();

//morgan (http logger)
app.use(morgan("combined"));

//middleware (http logger)(post request)
app.use(cors())
app.use(express.json())

//Routes
app.use('/api/courses', require('./server/routes/courses'))

// Middleware để phục vụ các file tĩnh từ thư mục build
app.use(express.static(path.join(__dirname, 'build')));

// Bất kỳ request nào không phải API sẽ trả về file index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Cấu hình cổng mà server sẽ chạy
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});