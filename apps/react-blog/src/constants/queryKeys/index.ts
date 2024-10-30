import { COMMENT_QUERY_KEYS } from "./comment.keys.const";
import { POST_QUERY_KEYS } from "./post.keys.const";
import { USER_QUERY_KEYS } from "./user.keys.const";

// query 키를 중앙 집권화 해서 관리한다.
export const QUERY_KEYS = {
  ...USER_QUERY_KEYS,
  ...POST_QUERY_KEYS,
  ...COMMENT_QUERY_KEYS,
};
