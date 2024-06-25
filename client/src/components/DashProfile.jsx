import React, { useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { Button, TextInput } from 'flowbite-react';
import {getDownloadURL,getStorage,ref,uploadBytesResumable} from 'firebase/storage';
import { app } from '../firebase';
import { Alert } from 'flowbite-react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';


export default function DashProfile() {
    const {currentUser}= useSelector((state)=>state.user);
    const [imageFile,setImageFile]= useState(null);
    const [imageFileUrl, setImageFileUrl]= useState(null);
    const [imageFileUplodingProgress, setImageFileUploadingProgress]=useState(0);
    const [imageFileUploadError, setImageFileUploadError]= useState(null);
    const filePickerRef= useRef();

    const handleImageChange= (e)=>{
      const file=e.target.files[0];
      if(file){
        setImageFile(file);
        setImageFileUrl(URL.createObjectURL(file));
      }
    };

    useEffect(()=>{
      if(imageFile){
         uploadImage();
      }
    }, [imageFile]);


    const uploadImage= async() => {
      setImageFileUploadError(null);
      const storage= getStorage(app);
      const fileName= new Date().getTime() + imageFile.name;
      const storageRef= ref(storage, fileName);
      const uplaodTask= uploadBytesResumable(storageRef,imageFile);
      uplaodTask.on('state_changed',
        (snapshot)=>{
          const progress= (snapshot.bytesTransferred/snapshot.totalBytes)*100;
          setImageFileUploadingProgress(progress.toFixed(0));
        },
        (error)=>{
          setImageFileUploadError('Could not upload image. Upload file less than 2mb.');
          setImageFileUploadingProgress(null);
          setImageFile(null);
          setImageFileUrl(null);
        },
        ()=>{
          getDownloadURL(uplaodTask.snapshot.ref).then((downloadURL)=>{
            setImageFileUrl(downloadURL);
          });
        }

      )
    };


  return (
    <div className='max-w-lg mx-auto p-1 flex flex-col w-60 py-10'>
      <h1 className='my-7 text-center font-semibold text-3xl'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <input type='file' accept='image/*' onChange={handleImageChange} ref={filePickerRef} hidden/>
        <div className='w-50 h-50 self-center cursor-pointer shadow-md overflow-hidden rounded-full' onClick={()=>filePickerRef.current.click()}>
        
        <img src={imageFileUrl || currentUser.profilePicture} alt="user" className='rounded-full w-full h-full object-cover border-8 border-[lightgray]' /> 
        </div>
        {imageFileUploadError && (
          <Alert color='failure'>
            {imageFileUploadError}
          </Alert>
        )}
        
        <TextInput type='text' id='username' placeholder='username' defaultValue={currentUser.username} />
        <TextInput type='email' id='email' placeholder='email' defaultValue={currentUser.email} className='w-full'/>
        <TextInput type='password' id='password' placeholder='******'  />
        <Button type='submit' gradientDuoTone='purpleToBlue' outline>
          Update
        </Button>
      </form>
      <div className='text-red-500 flex justify-between mt-5'> 
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign Out</span>
      </div>
    </div>
  )
}
