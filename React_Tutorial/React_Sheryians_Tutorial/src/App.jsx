import React from 'react'
// import Card from './Component/Card'
import { BsBookmark } from "react-icons/bs";
import Card2 from './Component/Card2';
import User from './Component/User';
import Css from './talwind Css/css';
// import  './talwind Css/css';

// const arr=[
//   {user:"Aditya",age:20},
//   {user:"Krish",age:30},
//   {user:"abc",age:21}
// ];
// const jobs = [
//   {
//     id: 1,
//     company: "Amazon",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//     posted: "5 days ago",
//     title: "Senior UI/UX Designer",
//     type: "Part Time",
//     level: "Senior Level",
//     salary: "$120/h",
//     location: "Mumbai, India",
//   },
//   {
//     id: 2,
//     company: "Google",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//     posted: "2 days ago",
//     title: "Frontend Developer",
//     type: "Full Time",
//     level: "Mid Level",
//     salary: "$90/h",
//     location: "Bangalore, India",
//   },
//   {
//     id: 3,
//     company: "Microsoft",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//     posted: "1 week ago",
//     title: "Backend Engineer",
//     type: "Full Time",
//     level: "Senior Level",
//     salary: "$110/h",
//     location: "Hyderabad, India",
//   },
//   {
//     id: 4,
//     company: "Flipkart",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Flipkart_logo.svg",
//     posted: "3 days ago",
//     title: "React Developer",
//     type: "Contract",
//     level: "Junior Level",
//     salary: "$60/h",
//     location: "Delhi, India",
//   },
//   {
//     id: 5,
//     company: "Meta",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
//     posted: "4 days ago",
//     title: "Product Designer",
//     type: "Remote",
//     level: "Senior Level",
//     salary: "$130/h",
//     location: "Remote",
//   },
//   {
//     id: 6,
//     company: "Netflix",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//     posted: "6 days ago",
//     title: "UI Engineer",
//     type: "Full Time",
//     level: "Mid Level",
//     salary: "$100/h",
//     location: "Pune, India",
//   },
//   {
//     id: 7,
//     company: "TCS",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg",
//     posted: "2 weeks ago",
//     title: "Java Developer",
//     type: "Full Time",
//     level: "Junior Level",
//     salary: "$40/h",
//     location: "Ahmedabad, India",
//   },
//   {
//     id: 8,
//     company: "Infosys",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg",
//     posted: "1 day ago",
//     title: "Software Tester",
//     type: "Full Time",
//     level: "Fresher",
//     salary: "$35/h",
//     location: "Chennai, India",
//   },
//   {
//     id: 9,
//     company: "Swiggy",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/1/13/Swiggy_logo.png",
//     posted: "3 days ago",
//     title: "Mobile App Developer",
//     type: "Remote",
//     level: "Mid Level",
//     salary: "$85/h",
//     location: "Remote",
//   },
//   {
//     id: 10,
//     company: "Zomato",
//     logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png",
//     posted: "1 week ago",
//     title: "UX Researcher",
//     type: "Contract",
//     level: "Senior Level",
//     salary: "$95/h",
//     location: "Gurgaon, India",
//   },
// ];


// multiple return that time use fragment
const App = () => {
  return (
    // <>
    // <div>
    //   <h1>React Tutorial</h1>
    // </div>
    // <div>
    //   <h1>
    //     React Tutorial
    //   </h1>
    // </div>
    // </>
    // <div>
    // <div className='card'>
    //   <h1>React Tutorial</h1>
    //   <Card />
    //   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum velit obcaecati, est dolorum voluptatibus autem laudantium fugiat illo eveniet id nihil soluta reiciendis, ex impedit? Quis distinctio cupiditate suscipit inventore?</p>
    // </div>
    // {Card()}
    // </div>

    // Understanding Props
    //Properties
      // <div className='parent'>
      //   <Card user="Aditya"  age={18}/>
      //   <Card user="ABC"/>
      // </div>

      //mini Project for props Drilling
      // <div className="parent">
      //   <Card2 />
      // </div>


      
      // <div className="parent">
      //   {/* <User name='Aditya'/>
      //   <User name='Rushi'/>
      //   <User name={arr[0]}/> */}

      //   {/* {arr.map(function(e){
      //     return e;
      //   })} */}

      //   {jobs.map(function(e,idx){
      //     return  <div key={idx}>
      //       <Card2  company={e.company} 
      //     title={e.title}
      //     location={e.location}
      //     logo={e.logo}
      //     posted={e.posted}
      //     type={e.type}
      //     level={e.level}
      //     salary={e.salary}
      //     />
      //       </div>
      //   })}
      // </div>
    
    <>
    {/* <Header/>
    <Button />   */}
    <Css />
    </>
      
  )
}

export default App


