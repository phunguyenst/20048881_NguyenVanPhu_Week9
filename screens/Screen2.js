import {
  StyleSheet,
  View,
  Text,
  TextInput,
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export default function Screen2({ route, navigation }) {
  // const data = route.params
  const filldata = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const [name, setName] = React.useState(route.params.name || "");
  const [jobUpdate, setJobUpdate] = React.useState('');

  useEffect(() => {
    if(route.params?.job){
      dispatch({type: 'ADD_TODO', payload: {id: filldata.length + 1, name: route.params.job}});
    }

  }, [route.params?.job]);
  //update
  const handleUpdateNavigation = (itemName,itemID) => {
       
           
    navigation.navigate('screen3', 
    { 'name': route.params?.name, 
    'txt': 'Update Job', 
    'txtName': itemName, 
    'txtId': itemID, 
    'prevScreen': 'screen2' });

};
  //delete
  const handleDelete = (id) => {
    dispatch({type: 'DELETE_TODO', payload: id});
  }
  //tìm kiếm
  const handleSearch = (text) => {
    setJobUpdate(text); 
  };
  const filteredJobs = filldata.filter((job) =>
  job.name.toLowerCase().includes(jobUpdate.toLowerCase())
);

//cập nhật thay đổi
const handleSaveItem = (itemId, updatedName) => {
  dispatch({ type: 'UPDATE_TODO', payload: { id: itemId, name: updatedName } });
};
useEffect(() => {
  if (route.params?.jobUpdate) {
      handleSaveItem(route.params.jobUpdate.id, route.params.jobUpdate.name);
  }
}, [route.params?.jobUpdate]);


  return (
    <View style={styles.container}>
      <View style={{ flex: 1, alignItems: "center" }}>
        <Feather
          name="search"
          size={24}
          color="black"
          style={{ position: "absolute", top: 8, left: 22 }}
        />
        <TextInput
          placeholder="Search"
          style={{
            height: 40,
            width: 350,
            borderRadius: 8,
            borderWidth: 1,
            paddingLeft: 25,
          }}
          onChangeText={(text) => {handleSearch(text)}}
        ></TextInput>
      </View>
      <View style={{ flex: 8 }}>
        <ScrollView nestedScrollEnabled>
          <FlatList
           data={filteredJobs}
           keyExtractor={(item) => item.id.toString()}
           numColumns={1}
            renderItem={({ item }) => {
              return (
                <View
                  key={item.id}
                  style={{
                    flex: 1,
                    height: 100,
                    width: 350,
                    backgroundColor: "#6aebf9",
                    borderRadius: 8,
                    margin: 10,
                    padding: 10,
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <View style={{ flexDirection: "row" }}>
                    <FontAwesome name="check-square" size={30} color="green" />
                    <Text>{item.name}</Text>
                  </View>
                  <View style={{ flexDirection: "row" }}>
                    <TouchableOpacity
                      onPress={() => handleUpdateNavigation(item.name, item.id)}
                    >
                      <Feather name="edit" size={30} color="#333" />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        handleDelete(item.id, item.name);
                      }}
                    >
                      <MaterialIcons name="delete" size={30} color="#333" />
                    </TouchableOpacity>
                  </View>
                </View>
              );
            }}
          ></FlatList>
        </ScrollView>
      </View>
      <View style={{ flex: 2, alignItems: "center", justifyContent: "center" }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("screen3", {name: name});
          }}
        >
          <AntDesign name="pluscircle" size={70} color="aqua" style={{}} />
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