const rootDir = process.env.NODE_ENV === 'development' ? 'src' : 'build'

module.exports ={
   "type": process.env.DB_DIALECT,
   "host": process.env.DB_HOST,
   "port":process.env.DB_PORT,
   "username": process.env.DB_USERNAME,
   "password": process.env.DB_PASSWORD,
   "database": process.env.DB_DATABASE,
   "synchronize": false,
   "logging": process.env.NODE_ENV === 'development',
   "entities": [
      rootDir + "/entities/**/*{.ts,.js}"
   ],
   "migrations": [
      rootDir + "/migration/**/*{.ts,.js}"
   ],
   "subscribers": [
      rootDir + "/subscriber/**/*{.ts,.js}"
   ],
   "seeds": [
      rootDir + "/seeds/**/*{.ts,.js}"
   ],
   "cli": {
      "entitiesDir": rootDir + "/entity",
      "migrationsDir": rootDir + "/migration",
      "subscribersDir": rootDir + "/subscriber"
   }
}