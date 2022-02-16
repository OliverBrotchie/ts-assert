import { assertEquals, assertNotEquals } from "./mod.ts";

// The defualt objects that were provided
const o1 = {
    propA: 1,
    propB: {
        propA: [1, { propA: "a", propB: "b" }, 3],
        propB: 1,
        propC: 2,
    },
};

const o2 = {
    propA: 1,
    propB: {
        propB: 1,
        propA: [1, { propA: "a", propB: "c" }, 3],
        propC: 2,
    },
};
const o3 = {
    propA: 1,
    propB: {
        propA: [1, { propA: "a", propB: "b" }, 3],
        propB: 1,
    },
};

class Rectangle {
    height: number;
    width: number;
    constructor(height: number, width: number) {
        this.height = height;
        this.width = width;
    }
}

class Square {
    height: number;
    width: number;
    constructor(length: number) {
        this.height = length;
        this.width = length;
    }
}

const Getter = {
    get world() {
        return "Hello World!";
    },
};

const Getter2 = {
    get world() {
        return "Goodbye World!";
    },
};

Deno.test("String Pass", () => {
    assertEquals("Test 01", "abc", "abc");
});

Deno.test("String Fail", () => {
    assertNotEquals("Test 02", "abc", "cba");
});

Deno.test("Numeric Pass", () => {
    assertEquals("Test 03", 20, 20);
});

Deno.test("Numeric Fail", () => {
    assertNotEquals("Test 04", 20, 10);
});

Deno.test("Numeric Fail (NaN)", () => {
    assertNotEquals("Test 05", 20, Number.NaN);
});

Deno.test("Array Pass", () => {
    assertEquals("Test 06", ["a", "b", "c"], ["a", "b", "c"]);
});

Deno.test("Array Fail", () => {
    assertNotEquals("Test 07", ["a", "b", "c"], ["a", "b"]);
});

Deno.test("Array Fail (Length and Null)", () => {
    assertNotEquals("Test 08", ["a", "b", null], ["a", "b"]);
});

Deno.test("Array Fail (Object)", () => {
    assertNotEquals("Test 09", ["a"], { 0: "a" });
});

Deno.test("Array Fail (Nested Object)", () => {
    assertNotEquals("Test 10", ["a", "b", "c"], ["a", "b", { 0: "c" }]);
});

Deno.test("Complex Object Pass", () => {
    assertEquals("Test 11", o1, {
        propA: 1,
        propB: {
            propA: [1, { propA: "a", propB: "b" }, 3],
            propB: 1,
            propC: 2,
        },
    });
});

Deno.test("Complex Object Fail 1", () => {
    assertNotEquals("Test 12", o1, o2);
});

// Both tests are needed to verify if unused props are not checked
Deno.test("Complex Object Fail 2", () => {
    assertNotEquals("Test 13", o1, o3);
});

Deno.test("Complex Object Fail 3", () => {
    assertNotEquals("Test 14", o3, o1);
});

Deno.test("Class Pass", () => {
    assertEquals("Test 15", new Square(20), new Square(20));
});

Deno.test("Class Fail (Constructor)", () => {
    assertNotEquals("Test 16", new Rectangle(20, 20), new Square(20));
});

Deno.test("Getter Pass", () => {
    assertEquals("Test 17", Getter, Getter);
});

Deno.test("Getter Fail ", () => {
    assertNotEquals("Test 18", Getter, Getter2);
});
