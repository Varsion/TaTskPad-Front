import renderDOM from ".";
import Section from "./classes/Section";
import Task from "./classes/Task";

let state = {
  columns: [
    new Section("Section 1", () => renderDOM(), [
      new Task("Task 1", "Lorem ipsum"),
      new Task("Task 1", "Lorem ipsum"),
    ]),
  ],
  removeColumn(id: number) {
    this.columns = this.columns.filter((col) => col.getId() !== id);

    renderDOM();
  },
  addColumnForm: {
    name: "",
    addSection() {
      if (state.addColumnForm.name.trim().length < 1) return;

      state.columns.push(
        new Section(state.addColumnForm.name, () => renderDOM())
      );

      state.addColumnForm.name = "";

      renderDOM();
    },
    setColumnForm(name: string) {
      this.name = name;
      renderDOM();
    },
  },
};

export default state;
