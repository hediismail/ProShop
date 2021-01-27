import bcrypt from 'bcryptjs'

const users = [
  {
    name: 'Admin User',
    email: 'admin@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'hedi',
    email: 'hedi@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'gaith',
    email: 'gaith@gmail.com',
    password: bcrypt.hashSync('123456', 10),
  },
]

export default users
