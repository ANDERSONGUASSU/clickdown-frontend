import type { AuthUser } from "@/app/login/types/auth";

export interface NavbarItem {
  label: string;
  href: string;
}

export interface DesktopNavigationProps {
  items: NavbarItem[];
  pathname: string;
}

export interface DesktopActionsProps {
  isAuthenticated: boolean;
  isLoading: boolean;
  user: AuthUser | null;
  onDashboardPress: () => void;
}

export interface MobileControlsProps {
  isMenuOpen: boolean;
  onToggleMenu: () => void;
}

export interface MobileMenuProps {
  items: NavbarItem[];
  pathname: string;
}
