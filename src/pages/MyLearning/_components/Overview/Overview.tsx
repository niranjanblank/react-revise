import Greetings from "./_components/greetings";
import RecommendedContent from "./_components/recommended-content";
import TrainingHistoryShort from "./_components/training-history-short";

const Overview = () => {
    return ( 
    <div className="w-full grid grid-cols-1 gap-4 ">
            <div className="grid grid-cols-4 w-full gap-3">
                <div className="grid col-span-3">
                    <TrainingHistoryShort />
                </div>
                <div className="grid col-span-1">
                    <Greetings/>
                </div>
            </div>
            <div className="w-full">
                <RecommendedContent/>
            </div>
    </div>  );
}
 
export default Overview;