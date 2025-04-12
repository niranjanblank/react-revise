import { ClipboardList, Pencil, Rocket } from "lucide-react";
import CapabilityMenu from "./_components/capability-menu";
import CapabilityDevelopmentModal from "./_components/CapabilityDevelopmentModal";
import MyDevelopmentPlan from "./_components/MyDevelopmentPlan/MyDevelopmentPlan";
import AssignedCapabilities from "./_components/AssignedCapabilities/AssignedCapabilities";
import InterestCapabilities from "./_components/InterestCapabilities/InterestCapabilities";

const MyCapability = () => {
    return ( 
        <div
        className="grid grid-cols-1 gap-4"
        >
            <div className="grid grid-cols-2 gap-2">
                <CapabilityDevelopmentModal>
                    <CapabilityMenu title="Capability Development" icon={Rocket}/>
                </CapabilityDevelopmentModal>
                <CapabilityMenu title="Capability Assessment" icon={ClipboardList}/>
            </div>
            <div className="grid grid-cols-5 gap-2">
                <div className="col-span-2 flex flex-col gap-4">
                    <AssignedCapabilities/>
                    <InterestCapabilities/>
                </div>
                <div className="col-span-3 flex flex-col rounded-lg shadow-2xl border-1 border-gray-300 p-4">
                  <MyDevelopmentPlan/>
                </div>
            </div>
        </div>
     );
}
 
export default MyCapability;