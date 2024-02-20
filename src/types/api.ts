export type Comments = {
  currentUser: User;
  comments: Comment[];
};

export type Comment = {
  id: number;
  content: string;
  createdAt: string;
  score: number;
  user: User;
  replies?: Comment[];
  replyingTo?: string;
};

export type User = {
  image: Image;
  username: string;
};

export type Image = {
  png: string;
  webp: string;
};
