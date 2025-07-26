const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const users=require('./src/routes/userRoutes')
const customerRoutes = require('./src/routes/customerRoutes');
const cases=require('./src/routes/caseRoutes') 

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());


app.use('/api/users', users);
app.use('/api/customers', customerRoutes);
app.use('/api/cases',cases );


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
