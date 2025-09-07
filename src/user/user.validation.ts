import { LoginUserRequest, RegisterUserRequest } from 'src/model/user.model';
import z, { ZodType } from 'zod';

export class UserValidation {
  static readonly REGISTER_USER: ZodType<RegisterUserRequest> = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
    name: z.string().min(1).max(100),
  });

  static readonly LOGIN_USER: ZodType<LoginUserRequest> = z.object({
    username: z.string().min(1).max(100),
    password: z.string().min(1).max(100),
  });
}
