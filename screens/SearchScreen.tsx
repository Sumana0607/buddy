import { StyleSheet, Text, View, useColorScheme,ScrollView,Image, TextInput } from "react-native";
import React from "react";
import { GlobalStyle } from "@/styles/GlobalStyle";
import ThemeText from "@/components/global/TheamText";
import { Colors } from "@/constants/Colors";
import  {useState} from "react";
import CustomInput from "@/components/ui/CustomInput";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import  book from "/app/assets/images/book.jpeg";






export default function SearcgScreen() {
   const colorScheme = useColorScheme();
      const themeColor = Colors[colorScheme ?? "light"];
      const [searchTrim, setSearchTrim] = useState("");
      const updateSearch = (query: string) => {
        setSearchTrim(query);
      }
    return (
      <View style={styles.header}>
        <View style={styles.searchlogo}>
        <FontAwesome name="search" size={24} color="#4caf90" />
        <TextInput
        placeholder="search"
        keyboardType="default"
        value={searchTrim}
        onChangeText={setSearchTrim}
        cursorColor={themeColor.surface}
        />
        </View>

                <ScrollView style={styles.container}>
                {/* Content Section */}
                <View style={styles.contentContainer}>
                  <Image/>
                  <Image
                    source={require('../assets/images/book.jpeg')}
                    style={styles.image1}
                  />
                  <View style={styles.textAndIcons}>
                    <View style={styles.textContainer1}>
                      <ThemeText style={styles.sectionText1}>Learn C++</ThemeText>
                      <ThemeText style={styles.sectionText2}>Balaguruswami</ThemeText>
                    </View>
                    <View style={styles.iconContainer}>
                    <AntDesign name="heart" size={24} color="#4caf90" style={styles.icon}/>
                    <FontAwesome name="commenting" size={24} color="#c0c0c0"  style={styles.icon} />
                      <Image/>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainer2}>
                <Image
                    source={require('../assets/images/dotnet.jpeg')}
                    style={styles.image2}
                  />
                  <View style={styles.textAndIcons2}>
                    <View style={styles.textContainer1}>
                      <ThemeText style={styles.sectionText3}>Learn .NET</ThemeText>
                      <ThemeText style={styles.sectionText4}>Pramod Singh</ThemeText>
                    </View>
                    <View style={styles.iconContainer2}>
                    <AntDesign name="heart" size={24} color="#4caf90" style={styles.icon}/>
                    <FontAwesome name="commenting" size={24} color="#c0c0c0"  style={styles.icon} />
                      <Image/>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainer2}>
                <Image
                    source={require('../assets/images/story.png')}
                    style={styles.image3}
                  />
                  <View style={styles.textAndIcons3}>
                    <View style={styles.textContainer3}>
                      <ThemeText style={styles.sectionText5}>Learn War and Peace</ThemeText>
                      <ThemeText style={styles.sectionText6}>Leo Tolstoy</ThemeText>
                    </View>
                    <View style={styles.iconContainer3}>
                    <AntDesign name="heart" size={24} color="#4caf90" style={styles.icon}/>
                    <FontAwesome name="commenting" size={24} color="#c0c0c0"style={styles.icon} />
                      <Image/>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainer4}>
                <Image
                    source={require('../assets/images/baby.jpeg')}
                    style={styles.image4}
                  />
                  <View style={styles.textAndIcons4}>
                    <View style={styles.textContainer4}>
                      <ThemeText style={styles.sectionText7}>Learn As you  Like it</ThemeText>
                      <ThemeText style={styles.sectionText8}>Willam Shakespeare</ThemeText>
                    </View>
                    <View style={styles.iconContainer4}>
                    <AntDesign name="heart" size={24} color="#4caf90" style={styles.icon}/>
                    <FontAwesome name="commenting" size={24} color="#c0c0c0"  style={styles.icon} />
                      <Image/>
                    </View>
                  </View>
                </View>
                <View style={styles.contentContainer5}>
                <Image
                    source={require('../assets/images/detective.jpeg')}
                    style={styles.image5}
                  />
                  <View style={styles.textAndIcons5}>
                    <View style={styles.textContainer5}>
                      <ThemeText style={styles.sectionText9}>Learn Havana Red</ThemeText>
                      <ThemeText style={styles.sectionText10}>Leonardo Padura</ThemeText>
                    </View>
                    <View style={styles.iconContainer5}>
                    <AntDesign name="heart" size={24} color="#4caf90"  style={styles.icon}/>
                      <FontAwesome name="commenting" size={24} color="#c0c0c0"   style={styles.icon} />
                      <Image/>
                    </View>
                  </View>
                </View>
              </ScrollView>
              </View>
            );
          };
          

const styles = StyleSheet.create({
  header: {        //1st
    flex:1,
    backgroundColor:'#e8f5f2',
    borderRadius: 8,
  },
  searchlogo:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 10,
    margin: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex:  1,
    height: 40,
    fontSize: 16,
  },
  container: {
    flex: 1,
    padding: 10,
    backgroundColor:"#FAFAFA",
  },
  contentContainer: {
    margin: 20,
    padding: 15,
    backgroundColor: '#e8f5f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image1: {
    width: "100%",
    height: 250,
    borderRadius: 25,
    marginBottom: 10,
    resizeMode: 'cover',
    alignContent: 'center',
    marginRight: 10,
    
  },
  textAndIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor:"#f5fffa",
    borderRadius: 5,
  },
  textContainer1: {
    flex: 1,
  },
  sectionText1: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionText2: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon1: {
    marginLeft: 15,
  },
  contentContainer2: {     //2nd
    margin: 20,
    padding: 15,
    backgroundColor: '#e8f5f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image2: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textAndIcons2: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: "#f5fffa",
    borderRadius: 5,
  },
  textContainer2: {
    flex: 1,
  },
  sectionText3: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionText4: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  iconContainer2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon2: {
    marginLeft: 15,
  },
  contentContainer3: {     //3rd
    margin: 20,
    padding: 15,
    backgroundColor: '#e8f5f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image3: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textAndIcons3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: "#f5fffa",
    borderRadius: 5,
  },
  textContainer3: {
    flex: 1,
  },
  sectionText5: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionText6: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  iconContainer3: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon3: {
    marginLeft: 15,
  },
  contentContainer4: {     //4rd
    margin: 20,
    padding: 15,
    backgroundColor: '#e8f5f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image4: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textAndIcons4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: "#f5fffa",
    borderRadius: 5,
  },
  textContainer4: {
    flex: 1,
  },
  sectionText7: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionText8: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  iconContainer4: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon4: {
    marginLeft: 15,
  },
  
  contentContainer5: {     //5rd
    margin: 20,
    padding: 15,
    backgroundColor: '#e8f5f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  image5: {
    width: "100%",
    height: 250,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  textAndIcons5: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 12,
    backgroundColor: "#f5fffa",
    borderRadius: 5,
  },
  textContainer5: {
    flex: 1,
  },
  sectionText9: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2c3e50',
    marginBottom: 5,
  },
  sectionText10: {
    fontSize: 16,
    color: '#7f8c8d',
  },
  iconContainer5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon5: {
    marginLeft: 15,
  },

});
