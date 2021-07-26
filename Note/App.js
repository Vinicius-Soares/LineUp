import React, {useState} from 'react';
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Note from './components/Note';

export default function App() 
{
  const [note, setNote] = useState();
  const [noteItems, setNoteItems] = useState([]);

  const handleAddNote = () =>
  {
    Keyboard.dismiss();
    setNoteItems([...noteItems, note]);
    setNote(null);
  }

  const deleteNote = (index) =>
  {
    let itemsCopy = [...noteItems];
    itemsCopy.splice(index, 1);
    setNoteItems(itemsCopy);
  }

  return (
    <View style={styles.container}>

      {/* Tasks */}
      <View style={styles.tasksWrapper}>
        <Text style={styles.sectionTitle}>Note</Text>
        
        <View style={styles.items}>
          {/* Lista começa */}
          {
            noteItems.map((item, index) => 
            {
              return (
                <TouchableOpacity key={index} onPress={() => deleteNote(index)}>
                  <Note text={item} />
                </TouchableOpacity>
              ) 
            })
          }
          {/*<Note text={'Note 1'}/>
          <Note text={'Note 2'}/>*/}
        </View>

      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        style={styles.writeNotesWrapper}
      >
        <TextInput style={styles.input} placeholder={'Write a note'} value={note} onChangeText={text => setNote(text)}/>
      
        <TouchableOpacity onPress={() => handleAddNote()}>
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>+</Text>
          </View>
        </TouchableOpacity>
      </KeyboardAvoidingView>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  tasksWrapper: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  items: {
    marginTop: 30,
  },
  writeNotesWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  input: {
    paddingVertical: 15,
    paddingHorizontal: 15,
    backgroundColor: '#FFF',
    borderRadius: 60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    width: 250,
  },
  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: '#FFF',
    borderRadius: 60,
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText: {
    marginTop: '30%',
  },
});
