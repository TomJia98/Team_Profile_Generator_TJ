const Engineer = require("../lib/Engineer")

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should return an object containing properties under 'name, id, email, github", () => {
            const obj = new Engineer("test", 1, "test@test", "Engineer");

            expect(obj.name).toEqual("test");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("test@test");
            expect(obj.github).toEqual("Engineer")
        })
    });
    describe("Methods", () => {
        it("should return the corresponding data when using get methods under getName, getID, getEmail, getGithub, getRole", () => {
            const obj2 = new Engineer("test2", 2, "test2@test", "Engineer");

            expect(obj2.getName()).toEqual("test2");
            expect(obj2.getId()).toEqual(2);
            expect(obj2.getEmail()).toEqual("test2@test");
            expect(obj2.getGithub()).toEqual("Engineer");
            expect(obj2.getRole()).toEqual("Engineer");
        })
    })
});