const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("Initialization", () => {
        it("should return an object containing properties under 'name, id, email, officeNumber", () => {
            const obj = new Manager("test", 1, "test@test", 1);

            expect(obj.name).toEqual("test");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("test@test");
            expect(obj.officeNumber).toEqual(1)
        })
    });
    describe("Methods", () => {
        it("should return the corresponding data when using get methods under getName, getID, getEmail, getRole", () => {
            const obj2 = new Manager("test2", 2, "test2@test", 2);

            expect(obj2.getName()).toEqual("test2");
            expect(obj2.getId()).toEqual(2);
            expect(obj2.getEmail()).toEqual("test2@test");
            expect(obj2.getRole()).toEqual("Manager");
        })
    })
});