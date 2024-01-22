import { addNote,removeNote,editNote } from "../Features/Notes";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
const NoteModal = ({ isOpen,setIsOpen, closeModal,filterData,upFilterData , title, content }) => {
    const dispatch=useDispatch();
    const [data,setData]=useState({title:"",content:""})
    useEffect(()=>{
        if(filterData){
          setData({title:filterData[0].data.title,content:filterData[0].data.content});
        }
    },[filterData])
    if (!isOpen) {
      return null;
    }
    const HandleChange = (e)=>{
        setData(prevState => ({
            ...prevState,
            [e.target.name]: e.target.value
        }))
    }
    const HandleSubmit=(e)=>{
        e.preventDefault();
        if(data.title==="" && data.content===""){
            closeModal();
            return;
        }
        if(!filterData)
        dispatch(addNote(data));
        else
        dispatch(editNote({id: filterData[0].id ,data:data}));
        upFilterData("");
        setData({title:"",content:""})
        closeModal();
    }
    const HandleDelete = (e)=>{
      e.preventDefault();
      dispatch(removeNote(filterData[0].id))
      setData({title:"",content:""})
      upFilterData("");
      closeModal();
    }
    return (
      <div className="fixed  inset-0 z-50 flex items-center justify-center overflow-x-hidden overflow-y-auto  outline-none backdrop-blur-sm focus:outline-none">
        <div className="relative  w-auto  mx-auto my-6  ">
          {/* Modal content */}
          <div className="relative  h-[60vh] w-[40vw] flex flex-col  overflow-hidden bg-[#262523] rounded-md mx-4 my-4 shadow-[rgba(50,50,93,0.25)_0px_30px_50px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_26px_-18px_inset]">
            <div className="p-4 h-[75%]">
              <input type="text" className="text-lg text-white font-semibold mb-2 focus:outline-none w-full bg-[#262523]" name="title" value={data.title}  placeholder="Title" onChange={HandleChange} />
              <textarea  className="text-white bg-[#262523] focus:outline-none resize-none h-full w-full" placeholder="Enter Content Here" name="content" onChange={HandleChange} value={data.content}></textarea>
            </div>
            <div className="p-4 absolute bottom-0 flex gap-4 w-full bg-[#262523] border-t border-gray-200">
              <button
                className="px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                onClick={HandleSubmit}
              >
                {filterData ? "Update" : "Save"}
                
              </button>{filterData ? 
              <button
                className="px-4 py-2 text-white bg-red-500 rounded-md hover:bg-red-600 focus:outline-none focus:shadow-outline-blue active:bg-red-800"
                onClick={HandleDelete}
              >
               Delete 
              </button> : "" }
            </div>
          </div>
        </div>
        
      </div>
    );
  };
  
  export default NoteModal;