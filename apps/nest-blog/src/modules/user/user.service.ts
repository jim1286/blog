import {
  Injectable,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import {
  PostSignInRequest,
  PostSignUpRequest,
  TokenPayload,
  MessageResponse,
  PostSignInResponse,
  UserEntityResponse,
} from '@blog/types';
import * as bcrypt from 'bcrypt';
import { UserRepository } from './user.repository';
import { JwtStrategy } from '@/strategies';

@Injectable()
export class UserService {
  constructor(
    private readonly jwtStrategy: JwtStrategy,
    private readonly userRepository: UserRepository,
  ) {}

  async signIn(body: PostSignInRequest): Promise<PostSignInResponse> {
    const { userName, password } = body;
    const user = await this.userRepository.getUserByUsername(userName);

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new UnauthorizedException('비밀번호가 맞지 않습니다.');
    }

    const payload: TokenPayload = {
      id: user.id,
      userName: user.userName,
    };

    const accessToken = await this.jwtStrategy.getAccessToken(payload);
    const refreshToken = await this.jwtStrategy.getRefreshToken(payload);

    return { accessToken, refreshToken };
  }

  async createUser(
    body: PostSignUpRequest,
    file?: Express.Multer.File,
  ): Promise<MessageResponse> {
    const { userName, password } = body;
    const user = await this.userRepository.getUserByUsername(userName);

    if (user) {
      throw new NotAcceptableException('동일한 유저 아이디가 존재합니다.');
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = this.userRepository.create({
      userName,
      password: hashedPassword,
      role: 'user',
    });

    if (file) {
      try {
        // S3는 추후 연결(서버 비용)
        // const thumbnailUrl = await this.s3Service.uploadImage(file);
        newUser.thumbnailUrl = `http://localhost:3000/uploads/${file.filename}`;
      } catch (error) {
        throw new Error('이미지 업로드 실패');
      }
    }

    try {
      await this.userRepository.save(newUser);
      return { message: '사용자 생성 완료' };
    } catch (error) {
      throw new Error('사용자 생성 실패');
    }
  }

  async getUserByUserId(userId: string): Promise<UserEntityResponse> {
    const user = await this.userRepository.getUserByUserId(userId);

    if (!user) {
      throw new NotFoundException('유저가 존재하지 않습니다.');
    }

    return user;
  }
}
