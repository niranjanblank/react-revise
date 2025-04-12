import { Pencil, Rocket } from "lucide-react";
import ProgressBar from "../../../../../../components/UI/ProgressBar/ProgressBar";
import IndividualDevelopmentItem from "./individual-development-item";
import DevPlanEditModal from "./dev-plan-edit";

const devItems = [
    {id: 1, title: "Graphic Design - Advanced", completion: 15},
    {id: 2, title: "User Interface Design - Highly Advanced", completion: 50},
    {id: 3, title: "User Experience Design - Highly Advanced", completion: 100},
    {id: 4, title: "Self-awareness - Advanced", completion: 47},
    {id: 5, title: "Interaction Design - Intermediate", completion: 28},    
]
const MyDevelopmentPlan = () => {
    return (  
        <>
          <div className="flex justify-between items-center">
                        <div className="flex items-center gap-2">
                            {/* Title */}
                            <Rocket strokeWidth={3}/> <h1 className="font-bold"> My Development Plan</h1>
                        </div>
                        {/* settings */}
                        <div className="flex items-center gap-2">
                            {/* Title */}
                            <p className="flex items-center gap-1 font-bold uppercase">Complete</p>
                            <DevPlanEditModal>
                                <p className="flex items-center gap-1 p-2
                                        font-bold rounded-md
                                        hover:bg-gray-500/50
                                        "><Pencil size={18} strokeWidth={3}/>EDIT</p>
                            </DevPlanEditModal>
                        </div>
            </div>
            <hr className="mt-2 mb-2 border-gray-300"></hr>
            <div className="flex flex-col justify-center gap-2">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">Overall Progess</h1>
                    <h1 className="text-violet-600">50% (20/40)</h1>
                </div>
                <ProgressBar value={50} color="primary"/>
            </div>
            <hr className="mt-4 mb-4 border-gray-300"></hr>
            <div className="flex flex-col gap-6">
                {devItems.map(item => (
                    <IndividualDevelopmentItem title={item.title} completion={item.completion} key={`dev-item-${item.id}`}/>
                ))}
                
            </div>
        </>
    );
}
 
export default MyDevelopmentPlan;