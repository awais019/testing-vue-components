import { shallowMount } from "@vue/test-utils";
import Parent from "@/components/Parent.vue";

//shallowMount doesn't mount child components
describe("Parent.vue", () => {
    test("", () => {
        const wrapper = shallowMount(Parent);
        expect(wrapper.text()).toContain("Parent");

    });
});