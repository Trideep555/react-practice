export const NoteCards=({notes,search, setNote})=>{
    return(<>
    <div className="flex flex-wrap gap-[3vw] w-[98vw] mx-2  mt-2 cursor-pointer">
      {notes.length!=0 ? (notes.filter(s => {
        let data=s.data.title.toLowerCase();
        search= search.toLowerCase();
        return data.indexOf(search)!=-1; }).map((state)=> 
    <div key={state.id} onClick={()=> setNote(notes.filter((curstate)=> curstate.id===state.id))} className="max-w-xs max-h-[40vh] h-[40vh] w-[18vw] overflow-hidden bg-[#262523] rounded-md mx-4 my-4 shadow-[rgba(50,50,93,0.25)_0px_30px_50px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_26px_-18px_inset]">
      <div className="p-4">
        <h3 className="text-lg  text-white font-semibold mb-2">{state.data.title!=""? state.data.title: <span className="text-gray-400">No Title Here</span> }</h3>
        <p className="text-white whitespace-pre-line">{state.data.content!=""? state.data.content.substring(0,150) : <span className="text-gray-400">No Content Here</span>}{state.data.content.length>150 ? "...":""}</p>
      </div>
    </div>
      )) : "" }
    
    </div>
    </>)
}