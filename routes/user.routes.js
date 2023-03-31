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
      governmentIdType,
      governmentIdNumber,
      role,
      gender,
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
      !governmentIdType ||
      !governmentIdNumber ||
      !uid ||
      !gender
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
      governmentIdType,
      governmentIdNumber,
      role,
      uid,
      gender,
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

router.post("/user/update/:id", isAuthenticated, async (req, res) => {
  try {
    const emailId = req.params.id;
    console.log(emailId);
    const user = await DB.get("finease", `user#${emailId}`, TABLE_NAME);
    if (!user) {
      return res.status(400).json(Response(400, "User does not exist"));
    }
    var pass = null;
    if (req.body.password) {
      const pwd = await hash(req.body.password);
      pass = pwd;
    }
    const updatedUser = {
      ...user,
      ...req.body,
      uID: user.uID,
      pk: "finease",
      sk: `user#${emailId}`,
      role: user.role,
      accomodation: user.accomodation,
      emailId: req.params.id,
      password: pass ? pass : user.password,
      updatedOn: new Date().toISOString(),
    };
    const result = await DB.put(updatedUser, TABLE_NAME);
    return res
      .status(200)
      .json(Response(200, "User updated successfully", result));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

// get all events of a user by emailId

router.get("/user/events/:emailId", isAuthenticated, async (req, res) => {
  try {
    const { emailId } = req.params;
    const user = await DB.get("finease", `user#${emailId}`, TABLE_NAME);
    if (!user) {
      return res.status(400).json(Response(400, "User does not exist"));
    }
    const events = await DB.queryBeginsWith(
      "finease",
      `userEvent#${emailId}`,
      TABLE_NAME
    );

    var list = [];
    for (let i in events) {
      console.log(events[i]);
      var event = await DB.queryWithFilter(
        "finease",
        `event`,
        "id",
        events[i].eventId,
        TABLE_NAME
      );
      list.push(...event);
      console.log(list);
    }
    return res
      .status(200)
      .json(
        Response(200, `All events of ${user.fullName} (${user.emailId})`, list)
      );
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

router.get("/tempPassVerify", async (req, res) => {
  const { token } = req.body;
  //   const hashedPass = await hash(process.env.TICKET_PAYLOAD_TOKEN);
  const isMatch = await verifyHash(process.env.TICKET_PAYLOAD_TOKEN, token);
  //   console.log(token);
  return res.status(200).json(Response(200, "Success", isMatch));
});

router.get("/accomodation", async (req, res) => {
  try {
    const data = await DB.queryBeginsWith(
      "finease",
      "accomodation",
      TABLE_NAME
    );
    // console.log(data);
    var resData = {
      0: { male: 50, female: 50 },
      1: { male: 50, female: 50 },
      2: { male: 50, female: 50 },
      3: { male: 50, female: 50 },
    };
    // console.log(data);
    if (data.length && data.length > 0) {
      for (let i in data) {
        console.log(data[i]);
        console.log(resData[2]["male"]);
        const gender = data[i]["gender"].toLowerCase();
        resData[data[i]["day"]][gender] -= 1;
      }
    }

    console.log(resData);

    return res.status(200).json(Response(200, "Success", resData));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

router.get("/accomodation/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const data = await DB.queryBeginsWith(
      "finease",
      `accomodation#${id}`,
      TABLE_NAME
    );
    // console.log(data);
    // const resData = JSON.parse(data.accomodation)

    return res.status(200).json(Response(200, "Success", data));
  } catch (error) {
    return res.status(500).json(Response(500, "Internal Server Error", error));
  }
});

module.exports = router;
