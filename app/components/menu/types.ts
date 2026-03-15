export type MenuItem = {
  name: string;
  price: number | null;
  desc: string;
};

export type MenuCategory = {
  title: string;
  description: string;
  image: string;
  items: MenuItem[];
};
