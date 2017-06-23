export class MovieLite {
  id: number;
  title: string;
  posterFullPath: string;
  overview: string;
}


export class LoginCredentials {
  email: string;
  password: string;
}



export interface Comment {
  movie_id: number,
  author: string;
  content: string;
  oldId?: number
  id: number
}


export interface CommentsByMovie {
  [key: number]: Comment[];
}

