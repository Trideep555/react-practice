
export const  Header=({search,setSearch}) =>{
    return (<>
    <div className="flex justify-center text-white gap-5 mt-4">
            <input type="search" value={search} onChange={(e)=> setSearch(e.target.value)}  placeholder="Search By Title" className="bg-[#262523] p-1 rounded placeholder:p-2 w-[40vw] placeholder:text-white text-white  shadow-[rgba(50,50,93,0.25)_0px_30px_50px_-12px_inset,rgba(0,0,0,0.3)_0px_18px_26px_-18px_inset]" />

        
    </div>
    </>)
} 