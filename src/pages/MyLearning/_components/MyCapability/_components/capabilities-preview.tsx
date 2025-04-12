
interface CapabilitiesPreviewProp{
    id: number;
    title: string;
    selected: boolean;
}
const CapabilitiesPreview = ({capability, onToggle}: {capability: CapabilitiesPreviewProp, onToggle :  (id: number) => void;}) => {

    const style = capability.selected? "bg-violet-700 text-white": "bg-gray-200"
    return ( 
    <div className={`cursor-default rounded-full px-4 py-1 w-fit ${style}`} onClick={() => onToggle(capability.id)}>
        {capability.title}
    </div> );
}
 
export default CapabilitiesPreview;