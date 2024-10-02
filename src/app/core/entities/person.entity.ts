import Skiller from "./skillers.entity";

export default interface Person {
    namePerson: string;
    age: number;
    skills: Skiller[]; 
}