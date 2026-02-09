// import { TypeOrmModuleOptions } from "@nestjs/typeorm";
// import * as dotenv from "dotenv";

// dotenv.config();

// export const typeormConfig: TypeOrmModuleOptions = {
//   type: "postgres",
//   host: process.env.DB_HOST || "localhost",
//   port: parseInt(process.env.DB_PORT || "5432", 10),
//   username: process.env.DB_USER || "postgres",
//   password: process.env.DB_PASSWORD || "1234",
//   database: process.env.DB_NAME || "erp",
//   synchronize: true,
//   entities: [__dirname + "/../features/**/*.entity.{ts,js}", __dirname + "/../auth/**/*.entity.{ts,js}"],
// };
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeormConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  url: 'postgresql://postgres:1234@localhost:5432/dars504',
  synchronize: true,
  entities: ['dist/features/**/*.entity.{ts,js}', "dist/auth/**/*.entity.{ts,js}"],
};

