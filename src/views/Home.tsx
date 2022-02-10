import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Theme, useTheme } from '../hooks';

export default function Home(): React.ReactElement {
  const theme = useTheme();
  const styles = getStyles(theme);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is the HOME screen!</Text>
    </View>
  );
}

function getStyles(theme: Theme): Record<string, Record<string, string | number>> {
  const { colors } = theme;

  return StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    text: {
      color: colors.text.primary,
      fontSize: 24,
      fontWeight: 'bold',
    },
  });
}
