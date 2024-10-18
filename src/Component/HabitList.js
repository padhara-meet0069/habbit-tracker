import { useSelector } from "react-redux";
import { habitSelector } from "../Redux/Reducer/habitReducer";
import HabitListItem from "./HabitListItem";

const HabitList = () => {

    const { habits } = useSelector(habitSelector);

    return(
        <div className="hidden md:block  w-1/3 h-full bg-fixed overflow-scroll">

            <nav className="w-full h-[55px] text-lg text-indigo-700 
                            font-semibold shadow-md p-2 flex justify-center 
                            items-center sticky top-0 bg-[#f4faff]" >
                
                {habits.length === 0 ? 'Nothing in your list' :'Your Habit List'}
            </nav>

            <div className="w-full flex flex-col h-fill p-2 overflow-auto">
                
                { 
                    habits.map((habit,i) => <HabitListItem key={i}
                                                    habit={habit} />)}
            </div>

        </div>
    )
}

export default HabitList;