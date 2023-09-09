"use client"
import React, { useState } from "react";
import { CldUploadButton } from 'next-cloudinary';
import { CldImage } from 'next-cloudinary';
 
 export type UploadResult={
  info:{
  public_id:string
  },
  event:'succes'

  
}


export default function App() {
const [imageId,setImageId]=useState('')

  return (
  <div className="flex justify-center flex-col text-white items-center">
      
   <CldUploadButton  onUpload={(result:UploadResult )=>{
      setImageId(result.info.public_id)
   }} 
   uploadPreset="jdrmeguy"  />
 {imageId&&
   <CldImage
  width="400"
  height="300"
  src={imageId}
  sizes="100vw"
  alt="Description of my image"
/>
}
  </div>
  );
}
