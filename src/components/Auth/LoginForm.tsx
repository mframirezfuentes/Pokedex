import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

export default function LoginForm() {
  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange:false,
    onSubmit: (formValue) => {
      console.log("Formulario enviado: ", formValue);
    },
  });

  return (
    <View>
      <Text style={styles.title}>Usuario</Text>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        autoCapitalize="none"
        value={formik.values.username}
        onChangeText={(text) => formik.setFieldValue("username", text)}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry={true}
        value={formik.values.password}
        onChangeText={(text) => formik.setFieldValue("password", text)}
      />
      <Button title="Entrar" onPress={formik.handleSubmit} />

      <Text style={styles.errors}>{formik.errors.username}</Text>
      <Text style={styles.errors}>{formik.errors.password}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema(){
  return{
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string().required("La Contraseña es obligatoria").min(3).max(20)
  }
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
    borderWidth: 1,
    borderRadius: 10,
  },
  errors:{
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  }

});
