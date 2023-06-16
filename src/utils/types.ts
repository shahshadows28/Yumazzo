export type Language = {
  title: string;
  flag: string;
  time: string;
  details: {
    icon: string;
    difficulty: string;
    description: string;
  };
  info: {
    [key: string]: string;
  };
};
