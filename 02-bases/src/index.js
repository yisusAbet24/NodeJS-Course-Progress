import { buildLogger } from "./plugins/index.js";
const logger = buildLogger("index.js");

const age = 17;
age > 18 ? logger.log("You are an adult") : logger.log("You are a child");
/* 
logger.error("This is an error"); */
