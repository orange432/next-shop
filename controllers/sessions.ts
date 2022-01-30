import { PrismaClient } from '@prisma/client'
import { randomString } from '../util/encryption';
const prisma = new PrismaClient()

const SESSION_TIME = 60*60*1000

export const createSession = async (userId: number) => {
  try{
    let unique = true;
    let sessionToken = "";
    // Check if session id already exists
    while(unique){
      sessionToken = randomString(64);
      let sessionFound = await prisma.session.findFirst({where: {sessionId: sessionToken}});
      if (sessionFound) unique = false;
    }
    await prisma.session.create({data: {
      sessionId: sessionToken,
      userId,
      expiry: new Date(Date.now() + SESSION_TIME)
    }})
    return [sessionToken, null];
  }catch(err){
    console.log(err);
    return [null, "Database error"]
  }
}

export const verifySession = async (sessionId: string) => {
  try{
    let session = await prisma.session.findUnique({where: {sessionId}})
    if(!session) return [null, "Session not found."]
    if(session.expiry<(new Date())) return [null, "Session expired."]
    //Session is valid, refresh time
    await prisma.session.update({where: {sessionId}, data: {expiry: new Date(Date.now() + SESSION_TIME)}})
    return [session.userId, null]
  }catch(err){
    console.log(err);
    return [null, "Database error"]
  }
}