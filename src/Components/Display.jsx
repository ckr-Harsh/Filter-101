import React,{ useState } from 'react'
import * as Mat from '@material-ui/icons'
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import Checkbox from '@material-ui/core/Checkbox';
import MenuItem from '@material-ui/core/MenuItem';
import Cards from './Card'
import Data from './CardData'
import './style.css'

function Display() {
    const [selected,setSelected] = useState([]);

   
    //Material UI styles
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1),
          minWidth: 120,
          maxWidth: 300,
        },
      }));
    const classes = useStyles();
    const items = [
        'Price: High to Low',
        'Price: Low to High',
        'a-z',
        'z-a',
        'Male',
        'Female',
    ]
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 15;
    const MenuProps = {
        PaperProps: {
          style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
          },
        },
      };




const m2 = Data;
const m3 = Data;

    //Variable  for each filter
   const Male =m2.filter(val=>val.gender==='Male');
   const Female = m3.filter(val=>val.gender==='Female');

   //Sorting from high to low
   const map1 = Data.map(val=>val);
   const lTh = map1.sort((a,b)=>a.price<b.price?-1:1);
   const Male1 = Male.map(val=>val);
   const mhigh= Male1.sort((a,b)=>a.price<b.price?-1:1);
   const Female1 = Female.map(val=>val);
   const fhigh = Female1.sort((a,b)=>a.price<b.price?-1:1);

   //Sorting from low to high
   const map2 = Data.map(val=>val);
   const hTl = map2.sort((a,b)=>a.price>b.price?-1:1);
   const Male2 = Male.map(val=>val);
   const mlow = Male2.sort((a,b)=>a.price>b.price?-1:1);
   const Female2 = Female.map(val=>val);
   const flow = Female2.sort((a,b)=>a.price>b.price?-1:1);
   
   //Sorting from a to z
   const map3 = Data.map(val=>val);
   const aTz = map3.sort((a,b)=>a.name<b.name?-1:1);
   const Male3 = Male.map(val=>val);
   const maz = Male3.sort((a,b)=>a.name<b.name?-1:1);
   const Female3 = Female.map(val=>val);
   const faz = Female3.sort((a,b)=>a.name<b.name?-1:1);
   
  //Sorting from z to a
  const map4 = Data.map(val=>val);
   const zTa = map4.sort((a,b)=>a.name>b.name?-1:1);
   const Male4 = Male.map(val=>val);
   const mza = Male4.sort((a,b)=>a.name>b.name?-1:1);
   const Female4 = Female.map(val=>val);
   const fza = Female4.sort((a,b)=>a.name>b.name?-1:1);
   
    
  
  
   //Handling the filter selector
    const Selector =(e)=>{
      setSelected(e.target.value);
    }
    
    //Passing the Selected filter into string ,
    let Variable ='';
     if(selected.length===0){
       console.warn('spinner');
     }else{
       if(selected.toString()==='Male'){
            Variable = Male;
       }else if(selected.toString()==='Female'){
            Variable = Female;
       }else if(selected.toString()==="Price: High to Low"){
         Variable = hTl;
       }else if(selected.toString()==="Price: Low to High"){
         Variable = lTh;
       }else if(selected.toString()==='a-z'){
         Variable =aTz;
       }else if(selected.toString()==='z-a'){
         Variable =zTa;
       }else if(selected.toString()==='Male,a-z'&&'a-z,Male'){
         Variable =maz;
       }else if(selected.toString()==='Female,a-z'&&'a-z,Female'){
        Variable =faz;
       }else if(selected.toString()==='Male,z-a'&&'z-a,Male'){
        Variable =mza;
       }else if(selected.toString()==='Female,z-a'&&'z-a,Female'){
        Variable =fza;
       }else if(selected.toString()==='Male,Price: High to Low'&&'Price: High to Low'){
         Variable = mlow;
       }else if(selected.toString()==='Female,Price: High to Low' && 'Price: High to Low,Female'){
         Variable = fhigh;
       }else if(selected.toString()==='Male,Price: Low to High'&& 'Price: Low to High,Male'){
         Variable = mhigh;
         console.log('2');
       }else if(selected.toString()==='Female,Price: Low to High' && 'Price: Low to High,Female'){
         Variable = flow;
       }else {
         console.warn('Error');
       }
     }
   
     console.log(flow);
    
    return (
        <div className="main">
           <header>
               Filter 101
               <span id="git">
                  <Mat.GitHub/>
               </span>
           </header>

           <div className='filter'>
             
        <FormControl className={classes.formControl} >

        <InputLabel id="demo-mutiple-checkbox-label"> Apply Filters </InputLabel>
        <Select
          labelId="demo-mutiple-checkbox-label"
          id="demo-mutiple-checkbox"
          multiple
          value={selected}
          onChange={Selector}
          input={<Input />}
          renderValue={(selected) => selected.join(', ')}
          MenuProps={MenuProps}
        >
          {items.map((val) => (
            <MenuItem key={val} value={val}>
              <Checkbox checked={selected.indexOf(val) > -1} />
              <ListItemText primary={val} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>


           </div>

        <div className="arr">
            {Variable===''?
                Data.map((val,index)=>{
                    return(
                        <Cards
                        name={val.name}
                        size={val.size}
                        img={val.img}
                        price={val.price}
                        brand={val.brand}
                        key={index}
                        />
                    )
                }):
                Variable.map((val,index)=>{
                    return(
                        <Cards
                        name={val.name}
                        size={val.size}
                        img={val.img}
                        price={val.price}
                        brand={val.brand}
                        key={index}
                        />
                    )
                })
            }
        </div>
        </div>
    )
}

export default Display
