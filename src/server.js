const express = require('express');
const app =express();
const PORT = 3000;
app.use(express.json());
app.use("orders",require("./routes/oders.routes"))
app.use ("analytics",require("./routes/analytics.routes"))

app.listen(PORT,()=>{
    console.log (`Server is running on port ${PORT}`);
})