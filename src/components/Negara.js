import React from 'react';
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
            pickerTitle={"Country Picker"}
            showSearchBar={true}
            disablePicker={false}
            changeAnimation={"none"}
            searchBarPlaceHolder={"Search....."}
            showPickerTitle={true}
            placeHolderLabel={selected}
            selectedLabel={selected}
            selectedValue={
                (index, item) => {
                    setSelected(item.name),
                    changeCountry(item.name)
                }
            }
        />
    );
}

export default Negara;