import React from 'react';
import {StyleSheet} from 'react-native';
import RNPicker from "rn-modal-picker";

function Negara({dataSource,changeProvince}){
    const[selected,setSelected]=React.useState('Silahkan pilih provinsi');
    return(
        <RNPicker
            dataSource={dataSource}
            dummyDataSource={dataSource}
            defaultValue={selected}
            pickerTitle={"Pilih Provinsimu"}
            disablePicker={false}
            changeAnimation={"none"}
            showPickerTitle={true}
            placeHolderLabel={selected}
            selectedLabel={selected}
            selectedValue={
                (index, item) => {
                    setSelected(item.name),
                    changeProvince(index)
                }
            }
            pickerStyle={styles.picker}
            dropdownImageStyle={styles.dropdown}
        />
    );
}

const styles = StyleSheet.create({
    picker: {
        marginTop: 10,
        width: '90%',
        borderWidth: 1,
        borderColor: '#2c3e50',
        borderRadius: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ecf0f1'
    },
})

export default Negara;