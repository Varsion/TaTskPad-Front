import Task from "./Task";

export default class Section {
    header: string;
    list: Task[];

    constructor(header: string, list: Task[] = []) {
        this.header = header;

        if (list == null) list = [];

        this.list = list;
    }

    addTask(task: Task) {
        if (task === null) 
            return;
            
        this.list.push(task);
    }

    removeTask(task: Task) {
        if (task === null) 
            return;

        this.list.filter((item => task.getId() == item.getId()));
    }
}