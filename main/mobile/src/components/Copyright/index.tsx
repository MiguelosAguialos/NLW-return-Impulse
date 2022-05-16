import React from 'react';
import { Text, View } from 'react-native';

import { styles } from './styles';

export function Copyright() {
  return (
    <View>
      <Text style={styles.text}>Feito com ♥ pelo Miguel Aguiar Fernandes</Text>
    </View>
  );
}
