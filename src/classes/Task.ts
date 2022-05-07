export default class Task {
    name: string;
    description: string;

    // private members
    private _id: number;
    private static _idIncrement: number;

    constructor(name: string, description: string) {
        if (typeof Task._idIncrement === "undefined")
            Task._idIncrement = 0;

        this.name = name;
        this.description = description;

        this._id = Task._idIncrement;
        Task._idIncrement++;
    }

    getId() {
        return this._id;
    }
}