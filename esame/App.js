//Giovanni Latina W83000029

import React from 'react';
import { StyleSheet, Text, View,FlatList } from 'react-native';
import {Card, ListItem, Button, Badge } from 'react-native-elements';
import { createStackNavigator } from 'react-navigation';
import * as firebase from "firebase";

export default class App extends React.Component {
  
    state= {
/*
        array1:[
          {img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            name:'Pizzeria',
            tel:33325846
          },
          { img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            name:'Pizzeria',
            tel:33325846
          },
          { img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            name:'Pizzeria',
            tel:33325846
          },
          { img:'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg',
            name:'Pizzeria',
            tel:33325846
          }],*/
          array: [ {
            "id": "000001",
            "name": "Sazi e Sani",
            "address": "Via Sisto 46/48, Catania",
            "info":
              "Italiana, Pizza, Mediterranea, aperto anche a pranzo, ottime pizze leggere",
            "tel": "+39 095 715 9794",
            "img":
              "https://media-cdn.tripadvisor.com/media/photo-o/0d/06/2e/52/bey8qhvi1s7ekn7qgibpxyuigzdv9m.jpg",
            "url": "http://www.saziesani.it/",
            "tags": ["ristorante", "pizzeria"]
          },
          {
            "id": "000002",
            "name": "Lido Sayonara",
            "address": "Viale Dei Lidi 523, 96100 Fontane Bianche, Siracusa",
            "info": "Bel lido a siracusa, uno dei migliori",
            "tel": "+39 095 715 9794",
            "img":
              "https://media-cdn.tripadvisor.com/media/photo-o/10/04/77/b2/photo0jpg.jpg",
            "url": "http://www.lidosayonara.com",
            "tags": ["mare", "beach", "stabilimento"]
          },
          {
            "id": "000003",
            "name": "Pasticceria Quaranta",
            "address": " Piazza Mancini Battaglia, 17, 95126 Catania CT",
            "info":
              "La pasticceria Quaranta nasce l'8 settembre 1984, un'occasione speciale per i catanesi, in quanto si festeggia la Madonna di Ognina o meglio conosciuta come â€œa festa da Bamminaâ€. La scelta della sede, in piazza Mancini Battaglia, rafforza il legame speciale tra l'azienda e il borgo di Ognina, luogo storico in cui si celebra tutti gli anni la festa e dove storia, tradizione, folklore e religione si fondono in un contesto unico e speciale.",
            "tel": "+39 095 712 4893",
            "img":
              "http://www.pasticceriaquaranta.it/commerce/wp-content/uploads/2018/06/monoporzioni-quaranta.jpg",
            "url": "http://www.pasticceriaquaranta.it/",
            "tags": ["bar", "dolci", "Sicilia"]
          },
          {
            "id": "000004",
            "name": "Giardino Bellini",
            "address": "via Etnea, tra il 215 e il 217, Catania",
            "info":
              "Il Giardino Bellini (o Villa Bellini) Ã¨ uno dei due giardini piÃ¹ antichi e uno dei quattro parchi principali di Catania. Localmente Ã¨ spesso indicato semplicemente come \"'a Villa\"",
            "tel": "+39 095 715 9794",
            "img":
              "https://upload.wikimedia.org/wikipedia/commons/5/57/FontanaVillaBellini.jpg",
            "url": "https://it.wikipedia.org/wiki/Giardino_Bellini",
            "tags": ["villa", "garden", "catania"]
          },
          {
            "id": "000005",
            "name": "Pescaria",
            "address": "Via Nino Bonnet 5, 20154 Milano",
            "info":
              "Un modo tutto nuovo di gustare buon pesce, crudo e fritto\nAperti tutti i giorni dalle 12:30 alle 00:00 con consegna a domicilio su Polignano.\nIn esclusiva per la clientela milanese effettuiamo consegna a domicilio solo attraverso il nostro partner Glovo!",
            "tel": "+39  02 659 9322",
            "img":
              "https://media-cdn.tripadvisor.com/media/photo-o/0e/9b/12/6e/panino-con-gamberoni.jpg",
            "url": "http://www.pescaria.it/pescaria/it/",
            "tags": ["panino", "pesce", "streetfood"]
          }],
    };
     
//http://www.dmi.unict.it/~calanducci/LAP2/favorities.json
/*
componentWillMount() {
  
  fetch('http://www.dmi.unict.it/~calanducci/LAP2/favorities.json')
    .then(response => {console.log(response)})
    .then(responseJson => {
      console.log(JSON.stringify(responseJson))
      this.setState({
        array: responseJson.data,
        
      });
    })
    .catch(error => {
      console.log(error);
    });
}
*/
renderRow=({ item }) => (
        
  <View style= {styles.container_card}>
        
        <Card
            image={{uri:item.img }}>
            
        </Card>

          <View style= {styles.container_info} >

          <View style= {styles.left_info}>

          <Text style={{marginBottom: 10, fontSize:15}}>
    
             {item.name} 
            
            </Text>
            
            <Text style={{marginBottom: 10, fontSize:10, }}>
              
            {item.tel}
            
            </Text>
            
            
            </View>
           
            <View style= {styles.right_info}>

                  <Badge containerStyle={{ backgroundColor: 'violet'}}>
                  
                    <Text>{item.tags}</Text>
                  
                  </Badge>
                  
                  <Badge containerStyle={{ backgroundColor: 'red'}}>
                  
                    <Text>User 2</Text>
                  
                  </Badge>
                  
            
            </View>
          </View>
      </View>

);

_keyExtractor = (item,index)=>String(index)


  render() {

    return (
      <View style={styles.container}>
        
          <FlatList
            data={this.state.array}
            renderItem = {this.renderRow}
            keyExtractor= {this._keyExtractor}
          />
      </View>
              
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    //alignItems: 'center',
    //justifyContent: 'center',
  },

  container_card: {
    //flex:1,
    //flexDirection:'',
    borderWidth: 2,
    borderColor: "black",
    //backgroundColor: "yellow",

  },

  container_info: {
    
    flexDirection:'row',
    //borderWidth: 2,
    //borderColor: "black",
    //backgroundColor: "red",
    paddingLeft:12,
    paddingRight:12,
    justifyContent:'space-between',
    
  },


  left_info: {
    
    flexDirection:'column',
    //borderWidth: 2,
    //borderColor: "yellow",
    //backgroundColor: "#fff",

  },
  right_info: {
    flexDirection: 'row',
    //justifyContent:'flex-start',
    
    //marginLeft:25,
    //borderWidth: 2,
    //borderColor: "brown",
    //backgroundColor: "green",

  }
});
