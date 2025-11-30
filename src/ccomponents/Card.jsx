import DailyTask from "./DailyTask";
import UserCard from "./UserCard";

const Card = ()=>{
    return <>
        <h1>Finally you came back</h1>
        <DailyTask />
        <UserCard name = {"Ashish Kumar"} position = {"React Developer"} />
        <UserCard name = {"Ashish Kumar Agnihotri"} position = {"javascript Developer"} />
    </>
}

export default Card