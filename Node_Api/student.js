const express = require("express");
const app = express();

app.use(express.json());

// API Endpoint
app.post("/check-eligibility", (req, res) => {
  const { dob } = req.body; // dob in dd/mm/yy

  if (!dob) {
    return res.status(400).json({ message: "Date of birth is required" });
  }

  // Split dd/mm/yy
  const [day, month, year] = dob.split("/");

  // Convert yy to yyyy (assume 2000+)
  const fullYear = year.length === 2 ? `20${year}` : year;

  const birthDate = new Date(fullYear, month - 1, day);
  const today = new Date();

  if (isNaN(birthDate)) {
    return res.status(400).json({ message: "Invalid date format" });
  }

  // Calculate age
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  // Check eligibility
  if (age >= 18) {
    res.json({ message: "You are eligible for admission", age });
  } else {
    res.json({ message: "You are not eligible for admission", age });
  }
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
 