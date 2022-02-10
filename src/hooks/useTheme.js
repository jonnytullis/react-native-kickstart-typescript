import { useColorScheme } from 'react-native'
import { dark, light } from '../Themes'

export default function useTheme() {
    const colorScheme = useColorScheme()
    return colorScheme === 'dark' ? dark : light
}
