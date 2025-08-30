import Navbar from './Navbar'
import React, { use, useEffect } from 'react'
import { useParams, useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPaste } from '../redux/pasteSlice'
import { useDispatch, useSelector } from 'react-redux'


const ViewPastes = () => {
  const {id}=useParams();
  const allpastes=useSelector((state)=>state.paste.pastes);
  const paste=allpastes.filter((p)=>p._id===id)[0];
  console.log(paste)

  return (
    <div>
      <div><Navbar /></div>
            <div className='flex flex-row gap-3 justify-center items-center place-content-between'>
                <input
                    type="text"
                    placeholder="Enter text here"
                    className="border-2 border-gray-300 rounded-md p-2 mt-4 w-[100%]"
                    value={paste.title}
                    disabled
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <button
                    onClick={createPaste}
                    className='border-2 border-gray-300 rounded-md p-2 mt-4 '>
                    {pasteId ? "update" : "create"}
                </button> */}
            </div>
            <div className='w-[600px]'>
                <textarea
                    className="border-2 border-gray-300 rounded-md p-2 mt-4 h-40 w-[100%]"
                    placeholder="Enter text here"
                    rows={10}
                    value={paste.content}
                    disabled
                    onChange={(e) => setValue(e.target.value)}>

                </textarea>
            </div>
    </div>
  )
}   

export default ViewPastes