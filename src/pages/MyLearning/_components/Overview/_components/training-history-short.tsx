import { ArrowRight, Award } from "lucide-react";
import TrainingItemCard from "./training-items-card";

const TrainingHistoryShort = () => {
    return ( 
        <div 
        className="
        flex flex-col gap-2
        px-3 py-2 shadow-lg rounded-xl border-gray-200 border-1">
        <div className="flex items-center justify-between"> 
            <span className="flex items-center font-semibold"><Award/> Training History </span>
            <a className="flex items-center gap-2 text-violet-600">View More <ArrowRight size={15}/></a>
        </div>
        <hr className="border-gray-300"></hr>
        <div className="grid grid-cols-4 gap-6">
            <TrainingItemCard title="2" subtitle="Enrolments"/>
            <TrainingItemCard title="11" subtitle="Attendance"/>
            <TrainingItemCard title="28" subtitle="Completions"/>
            <TrainingItemCard title="0" subtitle="External Learning"/>
        </div>
        </div>
     );
}
 
export default TrainingHistoryShort;