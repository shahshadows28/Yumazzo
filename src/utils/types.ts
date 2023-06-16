export type Language = {
  title: string;
  details: {
    icon: string;
    difficulty: string;
    description: string;
  };
  info: {
    [key: string]: string;
  };
}
