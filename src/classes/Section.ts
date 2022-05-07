import Task from "./Task";

export default class Section {
    header: string;
    newTask: Task;
    list: Task[];

    private _render: () => void;
    private _id: number;
    private static _idIncrement: number;

    constructor(header: string, render: () => void, list: Task[] = []) {
        if (typeof(Section._idIncrement) === "undefined")
            Section._idIncrement = 0;

        this.header = header;
        this.list = list;
        this.newTask = new Task("", "");
        this._render = render;
        this._id = Section._idIncrement;

        Section._idIncrement++;
    }

    getId() {
        return this._id;
    }
    
    newTaskChanged(task: Task) {
        if (task === null) return;

        this.newTask = task;

        this._render();
    };

    addTask(task: Task, index: number = -1) {
        if (task === null) return;

        if (index === -1) {
            this.list.push(task);
            this.newTask = new Task("", "");
        } else {
            this.list.splice(index, 0, task);
        }

        this._render();
    };

    removeTask(id: number) {
        if (id < 0) return;

        this.list = this.list.filter(task => task.getId() !== id);

        this._render();
    };

    updateList(source: number, destination: number) {
        let tmp = this.list[source];

        this.list.splice(source, 1);
        this.list.splice(destination, 0, tmp);

        this._render();
    }
}