import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
const prisma = new PrismaClient()


export const createUser = async (email: string, password: string, isAdmin: boolean = false) => {
  // Check the inputs are valid
  let errorArray = [];
  if(!email) errorArray.push("Please enter an email.")
  if(!password) errorArray.push("Please enter a password.")
  if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) errorArray.push("Please enter a valid email.");
  if(errorArray.length>0) return [null, errorArray.join(" ")]

  // Hash the password
  let hashedPassword: string;
  try{
    hashedPassword = await bcrypt.hash(password,12);
  }catch(err){
    console.log(err)
    return [null, "Error generating hashed password"]
  }

  // Create the user
  try{
    let user = await prisma.user.findUnique({where: {email}})
    if(user) return [null, "Email already in use"]
    await prisma.user.create({data: {
      email,
      password: hashedPassword,
      isAdmin
    }})
    return [true, null]
  }catch(err){
    console.log(err)
    return [null, "Error saving user to database."]
  }
}