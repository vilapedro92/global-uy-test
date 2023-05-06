import {RoleType} from "../enum/role.enum";

export interface UserInterface {
  email: string;
  password: string,
  role: RoleType
}
