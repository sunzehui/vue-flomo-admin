declare namespace API {
  export interface Article {
    content: string;
  }
  export type ArticleList = Article[];
  export interface ArticleDetailResult {
    content: string;
    author: string;
    createTime: string;
    deleteTime: string | null;
    id: string;
    isTopic: 0 | 1;
    tags: {
      content: string;
      id: string;
      is_topic: string;
    }[];
    updateTime: string;
  }
}
