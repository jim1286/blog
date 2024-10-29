import {
  Body,
  Controller,
  Get,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { GetUser } from '@/decorators';
import { JwtAuthGuard } from '@/guards';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags } from '@nestjs/swagger';
import {
  MessageResponse,
  PostSignInRequest,
  PostSignInResponse,
  PostSignUpRequest,
  UserEntityResponse,
} from '@blog/types';
import { diskStorage } from 'multer';
import { UtilStrategy } from '@/strategies';
import { extname } from 'path';

@ApiTags('user')
@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/signin')
  postSignIn(
    @Body(ValidationPipe) body: PostSignInRequest,
  ): Promise<PostSignInResponse> {
    return this.userService.signIn(body);
  }

  @Post('/signup')
  @UseInterceptors(
    FileInterceptor('thumbnail', {
      storage: diskStorage({
        destination: './uploads',
        filename: (_, file, cb) => {
          const uniqueSuffix = `${new UtilStrategy().getUUID()}${extname(file.originalname)}`;
          cb(null, uniqueSuffix);
        },
      }),
      limits: { fileSize: 5 * 1024 * 1024 },
    }),
  )
  postSignUp(
    @Body(ValidationPipe) body: PostSignUpRequest,
    @UploadedFile() file?: Express.Multer.File,
  ): Promise<MessageResponse> {
    return this.userService.createUser(body, file);
  }

  @Get('/')
  @UseGuards(JwtAuthGuard)
  getUser(@GetUser('id') userId: string): Promise<UserEntityResponse> {
    return this.userService.getUserByUserId(userId);
  }
}
