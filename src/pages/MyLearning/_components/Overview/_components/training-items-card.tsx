import { ArrowLeft, ArrowRight } from "lucide-react";

interface TrainingItemCardProp{
    title: string;
    subtitle: string;
}

const TrainingItemCard = ({title, subtitle}: TrainingItemCardProp) => {
    return ( 
    <div className="relative bg-violet-200 h-35 p-10 rounded-3xl">
        <h1 className=" absolute top-4 right-4 text-3xl text-violet-600 font-semibold">{title}</h1>
        <div className="absolute bottom-4 left-4">
            <p className="flex gap-2 items-center text-violet-600">
            {subtitle} <ArrowRight size={20}/></p></div>
    </div> );
}
 
export default TrainingItemCard;