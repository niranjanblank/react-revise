import { ClipboardList, Rocket } from "lucide-react";
import CapabilityMenu from "./_components/capability-menu";
import CapabilityDevelopmentModal from "./_components/CapabilityDevelopmentModal";

const MyCapability = () => {
    return ( 
        <div
        className="grid grid-cols-1"
        >
            <div className="grid grid-cols-2 gap-2">
                <CapabilityDevelopmentModal>
                    <CapabilityMenu title="Capability Development" icon={Rocket}/>
                </CapabilityDevelopmentModal>
                <CapabilityMenu title="Capability Assessment" icon={ClipboardList}/>
            </div>
        </div>
     );
}
 
export default MyCapability;