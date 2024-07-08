import { useEffect, useRef, useState } from "react";
import parse from 'html-react-parser';
import { formatTimeAgo } from "../utils/formatTimeAgo";
const Comment = ({ comment }) => {
    const [readMore, setReadMore] = useState(false);
    const [showBtn,setShowBtn] = useState(false)
    const paraRef = useRef(null);
    const { snippet } = comment;

    useEffect(()=>{
      const para = paraRef.current;
      if(para){
        const height = parseFloat(getComputedStyle(para).height);
        if(height > 48){
            setShowBtn(true)
        }
      }
    },[])
    return (
      <div className="flex p-3 rounded-lg m-1">
        <img
          className="w-10 h-10 rounded-full my-3"
          alt="user"
          src={
            snippet?.authorProfileImageUrl
              ? snippet?.authorProfileImageUrl
              : "https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png"
          }
        />
        <div className="ml-3 overflow-hidden pt-2">
          <div className="flex items-center gap-1">
            <p className="font-bold">
              {snippet?.authorDisplayName}
            </p>
            <p>{formatTimeAgo(snippet?.publishedAt)}</p>
          </div>
          <div>
            <p ref={paraRef} className={`[&>a]:text-blue-700 w-[80%] ${readMore?'line-clamp-none':'line-clamp-3'}`}>{parse(snippet?.textDisplay)}</p>
            { showBtn &&<span className="text-xs font-bold text-gray-600 cursor-pointer" onClick={()=>setReadMore(!readMore)}>
              {
                readMore ? "Read less" : "Read more"
              }
            </span>}
          </div>
        </div>
      </div>
    );
  };

  export default Comment;