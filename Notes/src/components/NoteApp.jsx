import { useEffect, useState } from 'react'
import { NoteCards } from './NoteCards'
import { Container, Button, lightColors, darkColors } from 'react-floating-action-button'
import { Header } from './Header'
import NoteModal from './NoteModal'
import { useSelector } from 'react-redux'
export const NoteApp = () =>{
    const [modalOpen, setModalOpen] = useState(false);
    const [currnote,SetCurrNote]=useState("");
    const notes=useSelector(state => state.notes);
    const [search,setSearch] = useState("");
    //console.log(notes);
    const openModal = () => {
    setModalOpen(true);
  };
  useEffect(()=>{
    if(currnote!=""){
        setModalOpen(true);
    }
  },[currnote])

  const closeModal = () => {
    setModalOpen(false);
  };
  
    return(<>
    <h1 className='text-yellow-50 text-center text-3xl hover:text-yellow-100 mt-2'>Notes App</h1>
      <Header  search={search} setSearch={setSearch} />
      <NoteCards notes={notes} search={search} setNote={SetCurrNote} />
      <Container>
            <Button
                tooltip="Add Notes!"
                icon="fas fa-plus"
                styles={{backgroundColor: darkColors.yellow, color: lightColors.white}}
                onClick={() => openModal()} />
        </Container>
        <NoteModal isOpen={modalOpen}  filterData={currnote} upFilterData={SetCurrNote} closeModal={closeModal} title="" content="" />

    </>)
}