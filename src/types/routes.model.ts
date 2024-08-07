export interface Route {
  url: string;
  label: string;
  icon: string;
  disabled?: boolean;
  children?: Route[];
}

export interface MenuItem {
  label: string;
  url: string;
  icon?: string; 
  children?: MenuItem[];
}
