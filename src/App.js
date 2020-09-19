import React from 'react';
import {Card, CardContent, FormControl, MenuItem, Select} from "@material-ui/core";
import './App.css';

function App() {
  return (
    <div className="app"> 
    <h1>COVID-19 Tracker</h1>

    <FormControl className="app_dropdown">
      <Select variant = "outlined" value = "abc">
        <MenuItem value = "WorldWide">Worldwide</MenuItem> 
        <MenuItem value = "WorldWide">Option2</MenuItem>
        <MenuItem value = "WorldWide">3</MenuItem> 
        <MenuItem value = "WorldWide">4</MenuItem> 

      </Select>
    </FormControl>
    </div>
  );
}

export default App;
