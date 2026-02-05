import { i18nSubPath } from 'src/utils/common';

interface Navigation {
  label: string;
  icon: string;
  available: boolean;
  route: string;
}

const i18n = i18nSubPath('components.navigations');

// main: {
//         projects: 'Projects',
//         devices: 'Devices',
//         filaments: 'Filaments',
//         messages: 'Messages',
//         settings: 'Settings',
//       },
export const MAIN_NAVIGATIONS: Navigation[] = [
  {
    label: i18n('main.devices'),
    icon: 'devices',
    available: true,
    route: 'devices',
  },
];

export const STACK_NAVIGATIONS: Navigation[] = [
  {
    label: i18n('stack.about'),
    icon: 'information',
    available: true,
    route: 'about',
  },
  {
    label: i18n('stack.settings'),
    icon: 'cog',
    available: true,
    route: 'settings',
  },
];
