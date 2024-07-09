import { View, Text, Image, StyleSheet, TextInput } from "react-native";
import React from "react";
import { useUser } from "@clerk/clerk-expo";
import { FontAwesome } from '@expo/vector-icons';

export default function Header() {
  const { user } = useUser();
  return (
    <View style={styles.header}>
      <View style={styles.prof_info}>
        <Image source={{ uri: user?.imageUrl }} style={styles.prof_img} />
        <View>
          <Text style={styles.welcome}>Welcome,</Text>
          <Text style={styles.userName}>{user?.fullName}</Text>
        </View>
      </View>
      <View style={styles.searchBarView}>
        <FontAwesome name="search" size={24} color="black" />
        <TextInput style={styles.searchBar} placeholder="Search..."/>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  prof_img: {
    width: 60,
    height: 60,
    borderRadius: 100,
  },
  header: {
    padding: 20,
    paddingTop: 40,
    backgroundColor:'gray',
    borderBottomLeftRadius:20,
    borderBottomRightRadius:20
  },
  prof_info: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  welcome:{

    fontFamily:'kanit-bold',
    fontSize:20,
    color:'white'
  },
  userName:{
    fontFamily:'kanit',
    fontSize:16,
    color:'white',
  },
  searchBarView:{
    display:'flex',
    flexDirection:'row',
    gap:10,
    alignItems:'center',
    backgroundColor:'white',
    padding:10,
    marginTop:10,
    marginVertical:10,
    borderRadius:10,
  },
  searchBar:{
    fontFamily:'kanit',
    fontSize:16
  }
});
