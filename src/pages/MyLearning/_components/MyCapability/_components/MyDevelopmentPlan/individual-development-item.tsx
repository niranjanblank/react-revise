import ProgressBar from "../../../../../../components/UI/ProgressBar/ProgressBar";

interface IndividualDevelopmentItemProps{
    title: string,
    completion: number
}
const IndividualDevelopmentItem = ({title, completion}: IndividualDevelopmentItemProps) => {
    return ( 
    <div className=" flex flex-col gap-2 rounded-full px-10 py-3  text-white bg-violet-600">
        <div className="flex justify-between">
            <h1>{title}</h1>
            <h1>{completion}%</h1>
        </div>
        <ProgressBar value={completion} color="secondary"/>
    </div> 
    );
}
 
export default IndividualDevelopmentItem;