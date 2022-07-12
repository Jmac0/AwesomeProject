import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Box(props, children) {
  const { color, text } = props;

  const styles = StyleSheet.create({
    box: {
      backgroundColor: `${color}`,
      marginTop: 10,
      paddingHorizontal: 10,
      paddingVertical: 10,
      alignItems: 'center',
    },

    text: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'white',
    },
  });

  return (
    <View style={[styles.box]}>
      <Text style={styles.text}>{`${text}`}</Text>
    </View>
  );
}

export default Box;
