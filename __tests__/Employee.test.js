const Employee = require("../lib/Employee")


describe("Employee", () => {
    describe("Initialization", () => {
        it("should return an object containing properties under 'name, id, email", () => {
            const obj = new Employee("test", 1, "test@test");

            expect(obj.name).toEqual("test");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("test@test");
        })
    });
    describe("Methods", () => {
        it("should return the corresponding data when using get methods under getName, getID, getEmail, getRole", () => {
            const obj2 = new Employee("test2", 2, "test2@test");

            expect(obj2.getName()).toEqual("test2");
            expect(obj2.getId()).toEqual(2);
            expect(obj2.getEmail()).toEqual("test2@test");
            expect(obj2.getRole()).toEqual("Employee");
        })
    })
});