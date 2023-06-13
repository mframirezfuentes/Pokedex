import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  Keyboard,
} from "react-native";
import React, {useState} from "react";

import { useFormik } from "formik";
import * as Yup from "yup";

import { user, userDetails } from "../../utils/userDB";
import useAuth from "../../hooks/useAuth";

export default function LoginForm() {
const [error, setError] = useState("")
const {login}= useAuth()

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: Yup.object(validationSchema()),
    validateOnChange: false,
    onSubmit: (formValue) => {
      setError("")
      const { username, password } = formValue;
      if (username !== user.username || password !== user.password) {
        setError("el usuario o la contraseña no son correctos")
      }else{
        setError("")
       login(userDetails)
      }
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
      <Text style={styles.errors}>{error}</Text>
    </View>
  );
}

function initialValues() {
  return {
    username: "",
    password: "",
  };
}

function validationSchema() {
  return {
    username: Yup.string().required("El usuario es obligatorio"),
    password: Yup.string()
      .required("La Contraseña es obligatoria")
      .min(3)
      .max(20),
  };
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
  errors: {
    textAlign: "center",
    color: "#f00",
    marginTop: 20,
  },
});
