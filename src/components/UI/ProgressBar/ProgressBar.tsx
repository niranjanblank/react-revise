interface ProgressBarProps{
    value: number
    color: "primary" | "secondary"
}
const ProgressBar = ({value, color="primary"}: ProgressBarProps) => {
    
    return ( 
        <div className="w-full h-4 bg-violet-300 rounded-md overflow-hidden">
            <div
            className={`h-full ${color==="primary"?"bg-violet-600": "bg-white" } transition-all duration-300}`}
            style={{width: `${value}%`}}
            >
            </div>
        </div>
     );
}

export default ProgressBar;