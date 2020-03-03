import { v4 as uuidv4 } from "uuid";

const userList = [
  {
    "id": uuidv4(),
    "name": "Peter Hansen",
    "start": "2019-06-09T08:00",
    "end": "2019-06-09T16:00",
    "role": "employee"
  },
  {
    "id": uuidv4(),
    "name": "Natalia Smith",
    "start": "2019-07-09T12:00",
    "end": "2019-07-09T16:00",
    "role": "employee"
  },
  {
    "id": uuidv4(),
    "name": "Benjamin Hughes",
    "start": "2019-08-09T08:00",
    "end": "2019-08-09T12:00",
    "role": "employer"
  }
]

export default userList