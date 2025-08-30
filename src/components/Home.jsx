import React, { use, useEffect } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import { addToPastes, updateToPaste } from '../redux/pasteSlice'
import { useDispatch, useSelector } from 'react-redux'

const Home = () => {
    const [title, setTitle] = React.useState("")
    const [value, setValue] = React.useState("")
    const [serchParam, setSerchParam] = useSearchParams()
    const pasteId = serchParam.get("pasteId")
    const dispatch = useDispatch()
    const allpastes = useSelector((state) => state.paste.pastes)

    useEffect(() => {
        if (pasteId) {
            const paste = allpastes.find((p) => p._id === pasteId);
            setTitle(paste.title);
            console.log(paste.title);
            setValue(paste.content);
        };
        
    }, [pasteId])

    function createPaste() {
        const paste = {
            title: title,
            content: value,
            _id: pasteId || Date.now().toString(34),
            createdAt: new Date().toISOString(),
        }

        if (pasteId) {
            // update paste
            dispatch(updateToPaste(paste));
        }
        else {
            // create paste
            dispatch(addToPastes(paste));
        }
        setTitle("");
        setValue("");
        setSerchParam({});

    }
    return (
        <>
            <div><Navbar /></div>
            <div className='flex flex-row gap-3 justify-center items-center place-content-between'>
                <input
                    type="text"
                    placeholder="Enter text here"
                    className="border-2 border-gray-300 rounded-md p-2 mt-4 w-[86%]"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <button
                    onClick={createPaste}
                    className='border-2 border-gray-300 rounded-md p-2 mt-4 '>
                    {pasteId ? "update" : "create"}
                </button>
            </div>
            <div className='w-[600px]'>
                <textarea
                    className="border-2 border-gray-300 rounded-md p-2 mt-4 h-40 w-[100%]"
                    placeholder="Enter text here"
                    rows={10}
                    value={value}
                    onChange={(e) => setValue(e.target.value)}>

                </textarea>
            </div>
        </>

    )
}

export default Home
