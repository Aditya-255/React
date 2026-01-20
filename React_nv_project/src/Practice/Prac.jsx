// create a class based component named display123
// create a state variable with 50 records
// implement pagination logic to show 5 records per page
// add buttons to navigate to next and previous page
// display current page number and total pages
// when user is on first page,disable previous button
// when user is on last page,disable next button

// records(array) ,currentpage(number),recordsperpage(number)
// totalpage(number),displayrecords(array)

import React,{Component} from "react"

class Display123 extends Component{
    constructor(){
        super()
        this.state={
            records:[
  { id: 1, name: "Aditya Patel", email: "aditya1@gmail.com", phone: "9876543210", status: "Active", createdAt: "2025-01-01" },
  { id: 2, name: "Rahul Sharma", email: "rahul2@gmail.com", phone: "9876543211", status: "Active", createdAt: "2025-01-02" },
  { id: 3, name: "Neha Verma", email: "neha3@gmail.com", phone: "9876543212", status: "Inactive", createdAt: "2025-01-03" },
  { id: 4, name: "Aman Singh", email: "aman4@gmail.com", phone: "9876543213", status: "Active", createdAt: "2025-01-04" },
  { id: 5, name: "Priya Mehta", email: "priya5@gmail.com", phone: "9876543214", status: "Active", createdAt: "2025-01-05" },
  { id: 6, name: "Rohit Joshi", email: "rohit6@gmail.com", phone: "9876543215", status: "Inactive", createdAt: "2025-01-06" },
  { id: 7, name: "Kavya Shah", email: "kavya7@gmail.com", phone: "9876543216", status: "Active", createdAt: "2025-01-07" },
  { id: 8, name: "Arjun Nair", email: "arjun8@gmail.com", phone: "9876543217", status: "Active", createdAt: "2025-01-08" },
  { id: 9, name: "Simran Kaur", email: "simran9@gmail.com", phone: "9876543218", status: "Active", createdAt: "2025-01-09" },
  { id: 10, name: "Vishal Yadav", email: "vishal10@gmail.com", phone: "9876543219", status: "Inactive", createdAt: "2025-01-10" },

  { id: 11, name: "Pooja Rana", email: "pooja11@gmail.com", phone: "9876543220", status: "Active", createdAt: "2025-01-11" },
  { id: 12, name: "Saurabh Jain", email: "saurabh12@gmail.com", phone: "9876543221", status: "Active", createdAt: "2025-01-12" },
  { id: 13, name: "Riya Kapoor", email: "riya13@gmail.com", phone: "9876543222", status: "Inactive", createdAt: "2025-01-13" },
  { id: 14, name: "Kunal Desai", email: "kunal14@gmail.com", phone: "9876543223", status: "Active", createdAt: "2025-01-14" },
  { id: 15, name: "Anjali Mishra", email: "anjali15@gmail.com", phone: "9876543224", status: "Active", createdAt: "2025-01-15" },
  { id: 16, name: "Deepak Kumar", email: "deepak16@gmail.com", phone: "9876543225", status: "Active", createdAt: "2025-01-16" },
  { id: 17, name: "Sneha Roy", email: "sneha17@gmail.com", phone: "9876543226", status: "Inactive", createdAt: "2025-01-17" },
  { id: 18, name: "Nikhil Bansal", email: "nikhil18@gmail.com", phone: "9876543227", status: "Active", createdAt: "2025-01-18" },
  { id: 19, name: "Aarti Choudhary", email: "aarti19@gmail.com", phone: "9876543228", status: "Active", createdAt: "2025-01-19" },
  { id: 20, name: "Mohit Agarwal", email: "mohit20@gmail.com", phone: "9876543229", status: "Inactive", createdAt: "2025-01-20" },

  { id: 21, name: "Shubham Tiwari", email: "shubham21@gmail.com", phone: "9876543230", status: "Active", createdAt: "2025-01-21" },
  { id: 22, name: "Divya Malhotra", email: "divya22@gmail.com", phone: "9876543231", status: "Active", createdAt: "2025-01-22" },
  { id: 23, name: "Manish Gupta", email: "manish23@gmail.com", phone: "9876543232", status: "Inactive", createdAt: "2025-01-23" },
  { id: 24, name: "Isha Khanna", email: "isha24@gmail.com", phone: "9876543233", status: "Active", createdAt: "2025-01-24" },
  { id: 25, name: "Tarun Saxena", email: "tarun25@gmail.com", phone: "9876543234", status: "Active", createdAt: "2025-01-25" },
  { id: 26, name: "Naina Arora", email: "naina26@gmail.com", phone: "9876543235", status: "Inactive", createdAt: "2025-01-26" },
  { id: 27, name: "Harsh Vardhan", email: "harsh27@gmail.com", phone: "9876543236", status: "Active", createdAt: "2025-01-27" },
  { id: 28, name: "Mehul Soni", email: "mehul28@gmail.com", phone: "9876543237", status: "Active", createdAt: "2025-01-28" },
  { id: 29, name: "Pankaj Solanki", email: "pankaj29@gmail.com", phone: "9876543238", status: "Inactive", createdAt: "2025-01-29" },
  { id: 30, name: "Rashmi Kulkarni", email: "rashmi30@gmail.com", phone: "9876543239", status: "Active", createdAt: "2025-01-30" },

  { id: 31, name: "Yash Malviya", email: "yash31@gmail.com", phone: "9876543240", status: "Active", createdAt: "2025-01-31" },
  { id: 32, name: "Komal Pandey", email: "komal32@gmail.com", phone: "9876543241", status: "Inactive", createdAt: "2025-02-01" },
  { id: 33, name: "Akash Verma", email: "akash33@gmail.com", phone: "9876543242", status: "Active", createdAt: "2025-02-02" },
  { id: 34, name: "Bhavya Trivedi", email: "bhavya34@gmail.com", phone: "9876543243", status: "Active", createdAt: "2025-02-03" },
  { id: 35, name: "Siddharth Mishra", email: "siddharth35@gmail.com", phone: "9876543244", status: "Inactive", createdAt: "2025-02-04" },
  { id: 36, name: "Rupal Dave", email: "rupal36@gmail.com", phone: "9876543245", status: "Active", createdAt: "2025-02-05" },
  { id: 37, name: "Ankit Chauhan", email: "ankit37@gmail.com", phone: "9876543246", status: "Active", createdAt: "2025-02-06" },
  { id: 38, name: "Priti Bhatt", email: "priti38@gmail.com", phone: "9876543247", status: "Inactive", createdAt: "2025-02-07" },
  { id: 39, name: "Jayesh Parmar", email: "jayesh39@gmail.com", phone: "9876543248", status: "Active", createdAt: "2025-02-08" },
  { id: 40, name: "Monika Saini", email: "monika40@gmail.com", phone: "9876543249", status: "Active", createdAt: "2025-02-09" },

  { id: 41, name: "Amit Kulkarni", email: "amit41@gmail.com", phone: "9876543250", status: "Inactive", createdAt: "2025-02-10" },
  { id: 42, name: "Kritika Joshi", email: "kritika42@gmail.com", phone: "9876543251", status: "Active", createdAt: "2025-02-11" },
  { id: 43, name: "Rohini Pawar", email: "rohini43@gmail.com", phone: "9876543252", status: "Active", createdAt: "2025-02-12" },
  { id: 44, name: "Sanjay Patil", email: "sanjay44@gmail.com", phone: "9876543253", status: "Inactive", createdAt: "2025-02-13" },
  { id: 45, name: "Pallavi Deshmukh", email: "pallavi45@gmail.com", phone: "9876543254", status: "Active", createdAt: "2025-02-14" },
  { id: 46, name: "Karan Malhotra", email: "karan46@gmail.com", phone: "9876543255", status: "Active", createdAt: "2025-02-15" },
  { id: 47, name: "Neel Joshi", email: "neel47@gmail.com", phone: "9876543256", status: "Inactive", createdAt: "2025-02-16" },
  { id: 48, name: "Bhumi Shah", email: "bhumi48@gmail.com", phone: "9876543257", status: "Active", createdAt: "2025-02-17" },
  { id: 49, name: "Darshan Patel", email: "darshan49@gmail.com", phone: "9876543258", status: "Active", createdAt: "2025-02-18" },
  { id: 50, name: "Mitali Joshi", email: "mitali50@gmail.com", phone: "9876543259", status: "Inactive", createdAt: "2025-02-19" }

            ],
            currentpage:0,
            recordsperpage:5,
            totalpage:10,
            startingindex:0,
            endingindex:0
        }       
    }
    onClickNext=()=>{
        this.setState((prevState) => ({
        currentpage: prevState.currentpage + 1,
    }));
    }
    onClickPrev=()=>{
        this.setState((prevState) => ({
        currentpage: prevState.currentpage - 1,
    }));
    }
    render(){
        const {records,currentpage,recordsperpage,totalpage}=this.state
        return(
            <>
            <div className="p-1 m-2 h-100px">
                {
                records.slice(currentpage*recordsperpage,(currentpage*recordsperpage)+5)
                .map(
                    (record)=>(
                    <div className="flex flex-col items-center justify-center  border-2">
                    <h3>{record.id}</h3>
                    <h1 key={records.id}>{record.name}</h1>
                    <h2>{record.email}</h2>
                    <h2>{record.phone}</h2>
                    <h2>{record.status}</h2>
                    <h2>{record.createdAt}</h2>
                    </div>
                    
                ))
                }
            </div>
            <div className="flex items-center justify-center ">
                <h1>{currentpage+1}/{totalpage}</h1>
                <button className="bg-red-400 p-2 m-1 rounded-xl" 
                onClick={this.onClickNext} 
                disabled={currentpage==totalpage-1}>
                    Next
                    </button>
                    <button className="bg-amber-400  p-2 m-1 rounded-xl" 
                    onClick={this.onClickPrev}
                    disabled={currentpage==0}
                    >
                        Prev
                        </button>
            </div>
            </>
        )
    }
}
export default Display123;


