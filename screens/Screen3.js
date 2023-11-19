import { StyleSheet, View, Text, TextInput ,TouchableOpacity} from "react-native";
import React, { useState} from "react";
import { AntDesign } from "@expo/vector-icons";

export default function Screen3({ route, navigation }) {
  const [name, setName] = useState(route.params?.name || "");
  const [job, setJob] = useState(route.params?.txtName || "");
  const [txt, setTxt] = useState(route.params?.txt || "ADD JOIN");
  const [itemId, setItemId] = useState(route.params?.txtId || "");

  const handleButtonPress = () => {
    if (itemId) {
      // Cập nhật mục theo ID
      navigation.navigate(route.params?.prevScreen, {
        jobUpdate: { id: itemId, name: job },
      });
    } else {
      // Thêm mục mới
      navigation.navigate("screen2", { job });
    }
  };
  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        {/* <AntDesign name="arrowleft" size={24} color="black" /> */}
        <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
          {txt}
        </Text>
        <TextInput
          style={{ fontSize: 20, fontWeight: "bold", paddingLeft: 10, borderRadius: 10, borderWidth: 1, margin: 10 }}
          value={job}
          onChangeText={(text) => setJob(text)}
          placeholder="Enter your job"
        ></TextInput>
        <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "blue",
          borderRadius: 10,
          height: 50,
        }}
        onPress={handleButtonPress}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "white" }}>
          {txt}
        </Text>
      </TouchableOpacity>
      </View>
   
     
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
