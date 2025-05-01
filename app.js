require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const morgan = require("morgan");

const PORT = process.env.PORT || 3015;

/* Routes */
const usersRoutes = require("./api/users/users.routes");
const lotesRoutes = require("./api/lotes/lotes.routes");
const emailRoutes = require("./api/email/email.routes");

app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

app.get("/api_losfrutales", (req, res) => {
  res.json({
    success: 1,
    message: "Esta es una Api para el proyecto Los Frutales",
  });
});

app.use("/api_losfrutales", usersRoutes);
app.use("/api_losfrutales", lotesRoutes);
app.use("/api_losfrutales", emailRoutes);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
