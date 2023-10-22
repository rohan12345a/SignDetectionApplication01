import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
// import DocumentPicker from 'react-native-document-picker';

const Modelapp = () => {
//   const selectDoc = async () => {
//     try {
//       const doc = await DocumentPicker.pick();
//       console.log(doc);
//     } catch (err) {
//       if (DocumentPicker.isCancel(err)) {
//         console.log(err);
//       } else {
//         console.log(err);
//       }
//     }
//   };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Welcome to Driver Distraction Model Prediction Application
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        // onPress={selectDoc}
        style={styles.imageInputButton}
      >
        <Text style={styles.buttonText}>Input Image</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFEFE',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: 'black',
  },
  imageInputButton: {
    backgroundColor: 'red',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  buttonText: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});

export default Modelapp;
