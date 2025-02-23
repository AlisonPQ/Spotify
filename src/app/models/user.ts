export interface User {
  display_name: string;
  email: string;
  id: string;
  images: { url: string }[];
  followers: { total: number };
  country: string;
}

export interface Image {
  height: number;
  url: string;
  width: number;
}
