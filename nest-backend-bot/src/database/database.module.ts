/* eslint-disable prettier/prettier */
// database.module.ts

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot(process.env.DATABASE_CONNECTION_STRING)],
  exports: [MongooseModule], // Export MongooseModule for use in other modules
})
export class DatabaseModule {}
