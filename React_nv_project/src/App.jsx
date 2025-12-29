import CreateCard from "./CardComponent";
import Classprops from "./Classprops";
import App1 from "./function";



function Firstclass() {

  return (
    <>
    {/* <h1>Hello world</h1> */}
    {/* <CreateCard/> */}
    <Classprops title="User Card 1" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT94fQLCyLFZWY51LGm-831HI-Mf2nDPT9u5w&s" btn="Click Me" desc="This is a description 1."/>
    <Classprops title="User Card 2" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s" btn="Click Me" desc="This is a description 2."/>
    <Classprops title="User Card 3" url="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFU7U2h0umyF0P6E_yhTX45sGgPEQAbGaJ4g&s" btn="Click Me" desc="This is a description 3."/>
    </>
    
  )
}
Firstclass()

export default Firstclass;


