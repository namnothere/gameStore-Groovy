const path = require("path");
require("dotenv").config({ path: path.join(__dirname, "../.env") });
const Category = require("../models/category");
const mongoose = require("mongoose");
const connectDB = require("./../config/db");
connectDB();

async function seedDB() {
  async function seedCateg(titleStr) {
    try {
      const categ = await new Category({ title: titleStr });
      await categ.save();
    } catch (error) {
      console.log(error);
      return error;
    }
  }

  async function closeDB() {
    console.log("CLOSING CONNECTION");
    await mongoose.disconnect();
  }
 
  // read json file and seed db from there
  const fs = require("fs");
  const data = fs.readFileSync("categories.json");
  
  const json = JSON.parse(data);
  
  for (var key in json) {
    if (json.hasOwnProperty(key)) {
      console.log(key + " -> " + json[key]);
      await seedCateg(json[key]);
    }
  }

  console.log("DONE SEEDING DB");

  await closeDB();
}

seedDB();
