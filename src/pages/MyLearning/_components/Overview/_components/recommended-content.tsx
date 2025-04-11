import { BookCopy } from "lucide-react";

const RecommendedContent = () => {
    return ( 
    <div className="flex flex-col p-5
    rounded-lg gap-3
    border-1 border-gray-200 bg-white shadow-lg">  
        <h1 className="flex items-center gap-2 font-semibold"><BookCopy/> Recommended Content </h1>
        <hr className="border-gray-300"></hr>

    </div> );
}
 
export default RecommendedContent;