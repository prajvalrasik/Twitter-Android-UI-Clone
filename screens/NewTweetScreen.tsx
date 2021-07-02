import React, { useState } from 'react';
import { 
    StyleSheet, 
    TouchableOpacity, 
    SafeAreaView,
    TextInput,
    Platform,
    Image,
} from 'react-native';

import { Text, View } from '../components/Themed';
import Feed from '../components/Feed';
import NewTweetButton from "../components/NewTweetButton";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import ProfilePicture from '../components/ProfilePicture';


export default function NewTweetScreen() {

    const [tweet, setTweet] = useState("");
    const [imageUrl, setImageUrl] = useState("");


    const onPostTweet = () => {
        console.log(`Posting the tweet: ${tweet}
        Image: ${imageUrl}`);
    }
  
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.headerContainer}>
                <TouchableOpacity>
                    <AntDesign name="close" size={30} color={Colors.light.tint} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.button} onPress={onPostTweet}>
                    <Text style={styles.buttonText}>Tweet</Text>
                </TouchableOpacity>
                </View>
                <View style={styles.newTweetContainer}>
                    <ProfilePicture image={'https://pbs.twimg.com/profile_images/1355118228976984067/u-ttdd-z_400x400.jpg'} />
                    <View style={styles.inputsContainer}>
                    <TextInput 
                        value={tweet}
                        onChangeText={(value :string ) => setTweet(value)}
                        multiline={true}
                        numberOfLines={3}
                        style={styles.tweetInput}
                        placeholder={"What's happening?"}                
                    />
                    <TextInput 
                        value={imageUrl}
                        onChangeText={(value :string ) => setImageUrl(value)}
                        style={styles.imageInput}
                        placeholder={"Image url (optional)"}         
                    />
                    </View>
                </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      backgroundColor: 'white',
      padding: 15,
      paddingTop: 50,

    },
    headerContainer: {
      width: '100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      
    },
    button: {
      backgroundColor: Colors.light.tint,
      borderRadius: 30,
    },
    buttonText: {
      paddingHorizontal: 20,
      paddingVertical: 10,
      color: 'white',
      fontWeight: 'bold',
      fontSize: 16
    },
    newTweetContainer: {
      flexDirection: 'row',
      //padding: 15,
    },
    inputsContainer: {
      marginLeft: 10,
    },
    tweetInput: {
      height: 80,
      maxHeight: 200,
      fontSize: 20,
      paddingBottom: 40,
    },
    pickImage: {
      fontSize: 18,
      color: Colors.light.tint,
      marginVertical: 10,
    },
    imageInput: {
      width: 150,
      height: 90,
    }
  });