import jwt from "jsonwebtoken";

const secretKey = "adnflsfjo0239423042309408239082309480";
// const token =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjM4LCJuYW1lIjoibW9oaXQiLCJsb2NhdGlvbiI6Im1vaGFsaSIsImlhdCI6MTY0NjY0ODAzOH0.iD6swz9SzcXQEKmXonvuN7U1HuOgLZnQHVvuPYIIgfs";
const token = jwt.sign(
  {
    id: 238,
    name: "mohit",
    location: "mohali",
    iat: Math.floor(Date.now() / 1000) - 30,
    exp: "5min",
  },
  secretKey,
  { expiresIn: 6 },
);

// let decodedInfo = jwt.verify(token, secretKey);
console.log(token);
