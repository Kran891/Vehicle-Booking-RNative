import { FlatList } from "react-native";
import VehicleCard from "../ui/vehicle-card";
import { useSelector } from "react-redux";
const data=[
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    },
    {
      c1:'03:00 PM - 07:00 PM',
       c2:'₹188' ,
       c3:'Non AC Seater',
        c4:'4',
      c5:'AP04 CV 8981'
    }
  ]
export default function(){
   const userData=useSelector((state)=>state.User.user)
   console.log(userData);
    return <FlatList data={data} renderItem={
        (itemData)=>{
            return <VehicleCard c1={itemData.item.c1} c2={itemData.item.c2} c3={itemData.item.c3} c4={itemData.item.c4} c5={itemData.item.c5}/>
        }
    }/>
}