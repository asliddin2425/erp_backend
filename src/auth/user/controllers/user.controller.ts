import { Controller, Get, Post, Body, Delete, Param } from "@nestjs/common";
import { UsersService } from "../user.service";
import { UserCreate } from "../dtos/user.create";
import { UserList } from "../dtos/user.list";

@Controller("users")
export class UsersController {
  constructor(private readonly service: UsersService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  @Post()
  create(@Body() body: UserCreate) {
    return this.service.userCreate(body);
  }

  @Delete(":id")
  delete(@Param("id") id: string) {
    return this.service.userDelete(id);
  }
}
