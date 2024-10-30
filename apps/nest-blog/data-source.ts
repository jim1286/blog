import * as dotenv from 'dotenv';
import * as path from 'path';
import { DataSource } from 'typeorm';

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

export const dataSource = new DataSource({
  type: 'mysql', // 어떤 DB를 사용할 것인지
  host: process.env.DB_HOST, // 우리는 본인 컴퓨터에 깔린 mysql을 사용할 예정이니, localhost로 해줍니다.
  port: Number(process.env.DB_PORT), // MySQL의 기본 포트는 3306 입니다.
  database: process.env.DB_NAME,
  username: process.env.DB_USER, // MySQL 설치시 설정한 유저네임을 입력하면 됩니다,
  // entity는 DB의 테이블을 지칭합니다. 따라서 어떤 테이블이 사용되는지. 테이블에 대한 정보를 가져오는 것.
  entities: [
    path.join(__dirname, 'dist/src/entities/**/*.entity.js'), // 컴파일된 JS 파일 경로
  ],
  synchronize: false, // 개발 환경에서는 필요할 때만 true로 설정
  logging: true, // typeorm 쿼리가 실행될 때, 터미널에 MySQL쿼리가 어떻게 짜여졌는지 보여줍니다.
});
