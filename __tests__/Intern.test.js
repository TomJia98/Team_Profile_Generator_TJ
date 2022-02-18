const Intern = require("../lib/Intern")


describe("Intern", () => {
    describe("Initialization", () => {
        it("should return an object containing properties under 'name, id, email, school", () => {
            const obj = new Intern("test", 1, "test@test", "testSchool");

            expect(obj.name).toEqual("test");
            expect(obj.id).toEqual(1);
            expect(obj.email).toEqual("test@test");
            expect(obj.school).toEqual("testSchool");
        })
    });
    describe("Methods", () => {
        it("should return the corresponding data when using get methods under getName, getID, getEmail, getSchool, getRole", () => {
            const obj2 = new Intern("test2", 2, "test2@test", "testSchool");

            expect(obj2.getName()).toEqual("test2");
            expect(obj2.getId()).toEqual(2);
            expect(obj2.getEmail()).toEqual("test2@test");
            expect(obj2.getSchool()).toEqual("testSchool");
            expect(obj2.getRole()).toEqual("Intern");
        })
    })
});