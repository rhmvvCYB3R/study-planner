import useTheme from "@/hooks/useTheme";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function Index() {
  const {toggleDarkMode} = useTheme();
  return (
    <View
      style={styles.container}
    >
      <Text style ={styles.content}>НУ ЧТО </Text>
      <TouchableOpacity onPress={toggleDarkMode}>
        <Text>Toggle Mode</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor:"white",
        gap:10,
      
  },
  content:
  {
    fontSize:26,
  },
 
});
