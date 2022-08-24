import { mount } from "@vue/test-utils";
import TodoApp from "@/components/TodoApp.vue";

describe("TodoApp.vue", () => {
    let wrapper;
    beforeEach(() => {
        wrapper = mount(TodoApp);
    })

    test("should render todo text", () => {
        const todo = wrapper.get("[data-test='todo']");

        expect(todo.text()).toBe("Learn vue testing.");
    });

    test("should add new todo", async () => {
        expect(wrapper.findAll("[data-test='todo']")).toHaveLength(1);

        await wrapper.get("[data-test='new-todo']").setValue("New todo");
        await wrapper.get("[data-test='form']").trigger("submit");

        expect(wrapper.findAll("[data-test='todo']")).toHaveLength(2);
    });


    test("should be able to complete todo", async () => {
        await wrapper.get("[data-test='todo-checkbox']").setValue(true);

        expect(wrapper.get("[data-test='todo'").classes()).toContain("completed");
    });
});