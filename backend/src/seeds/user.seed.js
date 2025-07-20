import { config } from "dotenv";
import { connectDB } from "../lib/db.js";
import User from "../models/user.model.js";

config();

const seedUsers = [

    {
    "email": "huynhmy10715@gmil.com",
    "fullName": "Hai Mi",
    "password": "123456"
  },
    {
    "email": "dangtu56@gmail.com",
    "fullName": "Đỗ Đăng Tú",
    "password": "123456"
  },
  
  {
    "email": "bachtuotxuyenkhong@gmail.com",
    "fullName": "Thuy Trang",
    "password": "456789"
  }
];

const seedDatabase = async () => {
  try {
    await connectDB();

    await User.insertMany(seedUsers);
    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
  }
};

// Call the function
seedDatabase();
