import Overview from "./_components/Overview/Overview";
import SideBar from "./_components/SideBar/side-bar";

const MyLearning = () => {
    return ( 
    <div>
        <div className="bg-neutral-800 h-35">
        </div>
        <img 
        className="w-40 h-40 rounded-full bg-red-200 border-4 border-white -mt-20 ml-20"
        src="vite.svg"/>

        <div className=" h-screen p-8 grid grid-cols-6">
            {/* for sidebar */}
            <SideBar/>
            {/* for main */}
            <main className="col-span-5  px-2">
                <Overview/>
            </main>
        </div>
       
    </div> );
}
 
export default MyLearning;