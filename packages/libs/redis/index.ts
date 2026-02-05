import Redis from "ioredis"

const redis = new Redis("rediss://default:AS8wAAIncDI5YmRmOTIzMTcxOTc0MjgwYjBmYmE4Y2U0ODk2NWJjMHAyMTIwODA@huge-raccoon-12080.upstash.io:6379");
export default redis;