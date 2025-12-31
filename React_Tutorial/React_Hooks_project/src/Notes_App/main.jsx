import React from "react";
import { useState } from "react";

const Main = () => {

    const [title, setTitle] = useState();
  const [Details, setDetails] = useState();

  const [Task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();
    const copytask=[...Task];
    copytask.push({title,Details})
    setTask(copytask);
    setTitle('');
    setDetails('');
  };

  const deleteHandler = (idx) => {
    const copytask=[...Task];
    copytask.splice(idx,1)
    setTask(copytask);
  }

  return (
    <div className="min-h-screen bg-black text-white flex flex-col lg:flex-row items-start justify-between px-6 py-10 gap-10">

      <form
        onSubmit={submitHandler}
        className="w-full lg:w-1/2 max-w-2xl bg-neutral-900 border border-neutral-700 rounded-2xl shadow-xl p-8 space-y-6"
      >
        <h1 className="text-2xl font-semibold text-center">
          Add a New Note
        </h1>

        <div className="flex flex-col space-y-4">
          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Task Heading
            </label>
            <input
              type="text"
              placeholder="Enter task heading..."
              value={title}
              onChange={(e)=>{
                setTitle(e.target.value);
              }}
              className="w-full px-4 py-3 rounded-lg bg-black border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition"
            />
          </div>

          <div>
            <label className="block mb-1 text-sm text-gray-300">
              Details
            </label>
            <textarea
              placeholder="Write details here..."
              value={Details}
              onChange={(e)=>{
                 setDetails(e.target.value)
              }}
              className="w-full px-4 py-3 h-32 rounded-lg bg-black border border-neutral-700 focus:border-white focus:ring-1 focus:ring-white outline-none transition resize-none"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-white text-black font-semibold hover:bg-gray-200 active:scale-[0.98] transition"
          >
            Add Note
          </button>
        </div>
      </form>

      <div className="w-full lg:w-1/2">
        <h2 className="text-xl font-semibold mb-4">Recent Notes</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-5 max-h-[300vh] overflow-y-auto pr-2">
              {Task.map(function(el,idx){
                return <div key={idx} className="flex justify-between flex-col bg-neutral-900 border border-neutral-700 text-white rounded-2xl h-50 p-5 shadow-md">
                  <div>
                    <h3 className="leading-tight text-xl font-bold">{el.title}</h3>
                  <p className="mt-1 leading-tight font-medium text-gray-400">{el.Details}</p>
                  </div>
                  <button 
                  onClick={()=>{
                    deleteHandler(idx)
                  }}
                  className="mt-3 px-4 py-1 rounded-lg bg-neutral-800 border border-neutral-600 hover:bg-neutral-700">
                    Delete
                  </button>

                </div>
              })}
        </div>

        </div>
      </div>
  );
};

export default Main;
