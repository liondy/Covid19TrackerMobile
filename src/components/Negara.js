import React from 'react';
import {StyleSheet} from 'react-native';
import RNPicker from "rn-modal-picker";

function Negara({data,changeCountry}){
    const[selected,setSelected]=React.useState('World');
    const dataSource = [];
    dataSource.push({
        id: 1,
        name: "World"
    })
    for (var i in data){
        dataSource.push({
            id: (i+1),
            name: data[i].country
        })
    }
    return(
        <RNPicker
            dataSource={dataSource}
            dummyDataSource={dataSource}
            defaultValue={selected}
            pickerTitle={"Pilih Negaramu"}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={"none"}
            searchBarPlaceHolder={"Cari....."}
            showPickerTitle={true}
            placeHolderLabel={selected}
            selectedLabel={selected}
            selectedValue={
                (index, item) => {
                    setSelected(item.name),
                    changeCountry(item.name)
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