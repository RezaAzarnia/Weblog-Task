export type LoginResult = {
  ok: boolean;
  status: number;
  token?: string;
  message?: string;
};
export type Post = {
  id: number;
  date: string;
  slug: string;
  status: string;
  type: string;
  title: {
    rendered: string;
  };
  content: {
    rendered: string;
    protected: boolean;
  };
  excerpt: {
    rendered: string;
    protected: boolean;
  };
  categories: {
    id: number;
    name: string;
    slug: string;
  }[];
  featured_media_object: {
    id: number;
    title: string;
    caption: string;
    description: string;
    media_details: {
      width: number;
      height: number;
      filesize: number;
    };
    source_url: string;
  };
};
