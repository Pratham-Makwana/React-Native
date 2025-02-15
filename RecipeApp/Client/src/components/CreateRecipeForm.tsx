import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import DropDownPicker from 'react-native-dropdown-picker';

interface CreateRecipeFormProps {
  onCancle: () => void;
}

const CreateRecipeForm: React.FC<CreateRecipeFormProps> = ({onCancle}) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  // dropdown menu state
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState<string | null>(null);
  const [items, setItems] = useState([
    {label: 'Easy', value: 'Easy'},
    {label: 'Medium', value: 'Medium'},
    {label: 'Hard', value: 'Hard'},
  ]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create New Recipe</Text>

      {/* Title or Recipe Name Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter recipe name"
        value={title}
        onChangeText={setTitle}
      />

      {/* Recipe Description Text Area */}
      <TextInput
        style={[styles.input, styles.textArea]}
        placeholder="Enter recipe description"
        multiline
        value={description}
        onChangeText={setDescription}
      />

      {/* Difficulty Dropdown */}
      <View style={styles.pickerContainer}>
        <Text style={styles.label}>Difficulty</Text>
        <DropDownPicker
          open={open}
          value={value}
          items={items}
          setOpen={setOpen}
          setValue={setValue}
          setItems={setItems}
          placeholder={'Choose difficulty'}
          style={styles.picker}
          dropDownContainerStyle={styles.dropdown}
        />
      </View>

      {/* Buttons Container */}
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={[styles.btn, styles.cancleBtn]}
          onPress={onCancle}>
          <Text style={styles.btnTxt}>Cancel</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn, styles.submitBtn]}>
          <Text style={styles.btnTxt}>Create Recipe</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreateRecipeForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1.5,
    borderColor: '#718096',
    width: '100%',
    height: 45,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 15,
    fontSize: 16,
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },

  label: {
    fontSize: 16,
    marginBottom: 8,
    color: '#333',
  },

  pickerContainer: {
    marginBottom: 20,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    zIndex: 1,
  },
  picker: {
    height: 45,

    width: '70%',
    borderRadius: 8,
    borderColor: '#718096',
    borderWidth: 1.5,
  },
  dropdown: {
    backgroundColor: '#fafafa',
    width: '70%',
    maxHeight: 200, // Limiting the dropdown height
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  btn: {
    flex: 1,
    padding: 16,
    borderRadius: 4,
    alignItems: 'center',
  },
  cancleBtn: {
    backgroundColor: '#787878',
    marginRight: 10,
  },
  submitBtn: {
    backgroundColor: '#004e98',
  },
  btnTxt: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
});
