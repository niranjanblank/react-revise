import { Info, Tag } from "lucide-react";
import CapabilitiesPreview from "../capabilities-preview";
import { useState } from "react";

const allCapabilities = [
    {id: 1, title: "Graphic Design - Advanced", selected: true},
    {id: 2, title: "User Interface Design - Highly Advanced", selected: true},
    {id: 3, title: "User Experience Design - Highly Advanced", selected: true},
    {id: 4, title: "Self-awareness - Advanced", selected: false},
    {id: 5, title: "Interaction Design - Intermediate", selected: false},    
]

const AssignedCapabilities = () => {
    const [capabilities, setCapabilities] = useState(allCapabilities)

    const toggleCapabilites = (id: number) => {
        setCapabilities(prev => {
            const index = prev.findIndex(cap => cap.id == id)
            if(index ===-1) return prev

            const updated = [...prev]
            updated[index] = {
                ...updated[index],
                selected: !updated[index].selected
            }
            return updated
        });
    };

    return ( 
    <div className="border-1 shadow-lg min-h-20 
    flex flex-col gap-2 p-4 flex-grow
    border-gray-300 rounded-lg">
        <div className="flex items-center gap-2">
            <Tag className="text-violet-600"/>
            <h1 className="font-bold">Assigned Capabilites</h1>
            <Info/>
        </div>
        <hr className="border-gray-300"/>
        
        {
            capabilities.map(cap=> (
                <CapabilitiesPreview capability={cap} key={`assigned-cap-${cap.id}`} onToggle={toggleCapabilites}/>
            ))
        }
    </div> );
}
 
export default AssignedCapabilities;