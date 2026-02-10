import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Group } from "./entities/groups.entity";
import { GroupController } from "./controllers/groups.controller";
import { GroupsService } from "./services/groups.service";
import { StudentGroup } from "./entities/student-groups.entity";
import { StudentGroupsController } from "./controllers/student-groups.controller";
import { StudentGroupsService } from "./services/student-groups.service";

@Module({
    imports: [TypeOrmModule.forFeature([Group, StudentGroup])],
    controllers: [GroupController, StudentGroupsController],
    providers: [GroupsService, StudentGroupsService]
})
export class GroupsModule {}
