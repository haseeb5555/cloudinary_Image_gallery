"use client"
import Heart from "@/components/Heart"
import { CldImage } from "next-cloudinary"
import { SearchResults } from "./page"
import { useTransition } from "react"
import {MarkFavoriteAction} from "@/actions/action"
import FullHeart from "@/components/FullHeart"

export default function ImageCard(props:any &{imageData:SearchResults,path:string}){
      const [transition,startTransition]=useTransition()
     const   {imageData}=props;
      const isFavrited=imageData.tags.includes('favorite')
      return(
            <div className="relative">

            <CldImage
          {...props} src={imageData.public_id}/>
          {isFavrited ? 
          <FullHeart className="absolute top-2 hover:text-white text-red-500 cursor-pointer right-2" 
          onClick={()=>{
            startTransition(()=>{
                  MarkFavoriteAction(imageData.public_id,false,props.path)
            })
         
          }}
          />:<Heart className="absolute top-2 hover:text-red-500 cursor-pointer right-2" 
          onClick={()=>{
            startTransition(()=>{
                  MarkFavoriteAction(imageData.public_id,true,props.path)
            })
         
          }}
          />
          }
          
            </div>
      )
}