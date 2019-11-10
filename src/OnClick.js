
import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import UseAnimations from 'react-useanimations';


export default function CheckBox() {
    const [state, setState] = React.useState({
      checked: false,
    });
  
    const handleChange = (name: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setState({ ...state, [name]: event.target.checked });
      
    };
  
    return (
        <Checkbox
        checked={state.checked}
        onChange={handleChange('checked')}
        value="checked"
        color="primary" 
        inputProps={{
          'aria-label': 'secondary checkbox',}}       
         />
        )}