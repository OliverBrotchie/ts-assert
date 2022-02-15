import { assertEquals } from "./mod.ts";

// Check that an assert fails and that the error message is correct
function test_fail(message: string, expected: unknown, actual: unknown): void {
    try {
        assertEquals(message, actual, expected);
    } catch (e) {
        // Check that the error message is correct
        if (message !== e.message)
            throw new Error("Test returned incorrect error message.");
        return;
    }
    throw new Error("Test did not throw an error.");
}

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
    test_fail("Test 02", "abc", "cba");
});

Deno.test("Numeric Pass", () => {
    assertEquals("Test 03", 20, 20);
});

Deno.test("Numeric Fail", () => {
    test_fail("Test 04", 20, 10);
});

Deno.test("Numeric Fail (NaN)", () => {
    test_fail("Test 05", 20, Number.NaN);
});

Deno.test("Array Pass", () => {
    assertEquals("Test 06", ["a", "b", "c"], ["a", "b", "c"]);
});

Deno.test("Array Fail", () => {
    test_fail("Test 07", ["a", "b", "c"], ["a", "b"]);
});

Deno.test("Array Fail (Length and Null)", () => {
    test_fail("Test 08", ["a", "b", null], ["a", "b"]);
});

Deno.test("Array Fail (Object)", () => {
    test_fail("Test 09", ["a"], { 0: "a" });
});

Deno.test("Array Fail (Nested Object)", () => {
    test_fail("Test 10", ["a", "b", "c"], ["a", "b", { 0: "c" }]);
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
    test_fail("Test 12", o1, o2);
});

// Both tests are needed to verify if unused props are not checked
Deno.test("Complex Object Fail 2", () => {
    test_fail("Test 13", o1, o3);
});

Deno.test("Complex Object Fail 3", () => {
    test_fail("Test 14", o3, o1);
});

Deno.test("Class Pass", () => {
    assertEquals("Test 15", new Square(20), new Square(20));
});

Deno.test("Class Fail (Constructor)", () => {
    test_fail("Test 16", new Rectangle(20, 20), new Square(20));
});

Deno.test("Getter Pass", () => {
    assertEquals("Test 17", Getter, Getter);
});

Deno.test("Getter Fail ", () => {
    test_fail("Test 18", Getter, Getter2);
});
