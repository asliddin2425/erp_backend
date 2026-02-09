import { Module } from "@nestjs/common";
import { GroupsModule } from "./features/groups/groups.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { typeormConfig } from "./config/typeorm.config";

@Module({
  imports: [TypeOrmModule.forRoot(typeormConfig), GroupsModule],
})
export class AppModule {}
