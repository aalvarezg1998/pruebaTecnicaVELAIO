import Person from "./person.entity";

export default interface Task {
    id: number;
    nameTask: string;
    finalDate: Date;
    completed: boolean;
    persons: Person[]
}