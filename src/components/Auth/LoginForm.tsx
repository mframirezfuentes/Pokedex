import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";

export default function LoginForm() {
  return (
    <View>
      <Text style={styles.title}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
      />
      <Button title="Entrar" onPress={() => console.log("Entrando")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 50,
    marginBottom: 15,
  },
  input: {
    height: 40,
    margin: 12,
    padding: 5,
    borderWidth:1,
    borderRadius: 10,
  },
});
