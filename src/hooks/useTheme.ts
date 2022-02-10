import { useColorScheme } from 'react-native';
import { dark, light, Theme } from '../Themes';

export type { Theme } from '../Themes';

export default function useTheme(): Theme {
  const colorScheme = useColorScheme();
  return colorScheme === 'dark' ? dark : light;
}
