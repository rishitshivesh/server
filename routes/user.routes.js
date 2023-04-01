const router = require("express").Router();
const DB = require("../db");
// const axios = require("axios");
// const { decrypt } = require("../utils/encrypt");
const {
  Response,
  verifyHash,
  verifyToken,
  generateToken,
  hash,
} = require("../utils");

var randomString = require("randomstring");

// const { registerMailer } = require("../utils/mailer");

const {
  isAuthenticated,
  isAuthorized,
} = require("../middlewares/auth.middleware");

const TABLE_NAME = process.env.TABLE_NAME;

router.get("/users", async (req, res) => {
  try {
    const user = await DB.queryBeginsWith("finease", `user#`, TABLE_NAME);
    // return res.status(200).json(Response(200, "Users", users));
    return res.status(200).json(Response(200, "All Users", user));
  } catch (error) {
    // return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

router.post("/users/register", async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      DOB,
      email,
      phone,
      street,
      city,
      state,
      pincode,
      country,
      governmentIdNumber,
      role,
      gender,
      token,
      uid,
    } = req.body;
    console.log(req.body);
    if (
      !firstName ||
      !lastName ||
      !DOB ||
      !email ||
      !phone ||
      !street ||
      !city ||
      !state ||
      !pincode ||
      !country ||
      !governmentIdNumber ||
      !uid ||
      !gender ||
      !token
    ) {
      return res.status(400).json(Response(400, "Missing parameters"));
    }

    // const user = await DB.get(email, "USER", TABLE_NAME);
    // console.log(TABLE_NAME);
    const user = await DB.get("finease", `user#${email}`, TABLE_NAME);
    console.log(user);
    if (user) {
      return res.status(400).json(Response(400, "User already exists"));
    }
    // const uID = "finease-" + Math.floor(20000 + Math.random() * 9999);
    const accessToken = generateToken({ email });
    // const password = randomString.generate(10);
    // const pwd = await hash(password);
    const newUser = {
      pk: "finease",
      sk: `user#${email}`,
      firstName,
      lastName,
      DOB,
      email,
      phone,
      street,
      city,
      state,
      pincode,
      country,
      governmentIdNumber,
      role,
      uid,
      gender,
      token,
      role: role ? role : "user",
      createdOn: new Date().toISOString(),
    };
    console.log(newUser);
    await DB.put(newUser, TABLE_NAME);

    // const mail = await registerMailer(newUser, password);

    return res
      .status(201)
      .json(Response(201, "User Registered", { ...newUser, accessToken }));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

router.post("/login", async (req, res) => {
  try {
    const { emailId, password } = req.body;
    if (!emailId || !password) {
      return res.status(400).json(Response(400, "Missing parameters"));
    }
    const user = await DB.get("finease", `user#${emailId}`, TABLE_NAME);
    if (!user) {
      return res.status(400).json(Response(400, "User not found"));
    }
    const isMatch = await verifyHash(password, user.password);
    if (!isMatch) {
      return res.status(400).json(Response(400, "Invalid credentials"));
    }
    const accessToken = generateToken({ emailId });
    return res
      .status(200)
      .json(Response(200, "Success", { ...user, accessToken }));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

// make update route to add account number to userdata

router.put("/users/:email", async (req, res) => {
  try {
    const { email } = req.params;
    // const { accountNumber } = req.body;
    // generate bank account number

    const accountNumber = "finease-" + Math.floor(20000 + Math.random() * 9999);

    if (!email || !accountNumber) {
      return res.status(400).json(Response(400, "Missing parameters"));
    }
    const user = await DB.get("finease", `user#${email}`, TABLE_NAME);
    if (!user) {
      return res.status(400).json(Response(400, "User not found"));
    }
    const updatedUser = {
      ...user,
      accountNumber,
    };
    await DB.put(updatedUser, TABLE_NAME);
    return res.status(200).json(Response(200, "Success", updatedUser));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

module.exports = router;
