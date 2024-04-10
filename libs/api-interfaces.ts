export interface BaseEntity {
  id?: string | null;
}

export interface Flashcard extends BaseEntity {
  title: string;
  description: string;
  question: string;
  answer: string;
  user_id: string;
  flag?: string;
}
