export type AppMenuItem = {
  key: string;
  label: string;
  icon?: React.ReactNode;
  children?: AppMenuItem[];
  className?: string;
}

export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}