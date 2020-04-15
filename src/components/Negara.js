import * as React from 'react';
import {Text, Picker} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

function Negara({data,changeCountry}){
    const[selected,setSelected]=React.useState('Global');
    return(
        <Picker
            selectedValue={selected}
            onValueChange={(itemValue, itemIndex) => 
                {
                    setSelected(itemValue),
                    changeCountry(itemIndex)
                }
            }
        >
            <Picker.Item label="Global" value="Global" />
            { data.map((item, key)=>
                <Picker.Item label={item.Country} value={item.Slug} key={key} />
            )}
        </Picker>
    );
}

export default Negara;