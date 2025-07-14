type Link = {
  name: string;
  url: string;
}

type Category = {
  name: string;
  links: Link[];
}

export type Footer = {
  key: string;
  details: string[];
  categories: Category[];
}