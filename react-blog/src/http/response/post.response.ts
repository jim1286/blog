export interface PostEntityResponse {
  title: string;
  subTitle?: string;
  content: string;
  userId: string;
  id: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt?: Date;
}
