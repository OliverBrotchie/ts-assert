// deno-lint-ignore-file no-explicit-any

/**
 * AssertionError indicates that a test has failed.
 * Allows for easy error message customization.
 */
export class AssertionError extends Error {
    name = "AssertionError";
    constructor(
        message: string,
        expected: unknown,
        actual: unknown,
        type?: string
    ) {
        super(
            `${message}: ${
                type ? type + " mismatch," : ""
            } expected ${expected} but found ${actual}`
        );
    }
}

/**
 * Asserts "expected" versus "actual",
 * 'failing' the assertion (via Error) if a difference is found.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
export function assertEquals(
    message: string,
    expected: any,
    actual: any
): void {
    if (Object.is(expected, actual)) return;

    if (typeof expected === "object" && typeof actual === "object") {
        // Gaurd clause to match constructors
        if (expected.constructor !== actual.constructor)
            throw new AssertionError(message, expected, actual, "Constructor");

        // Gaurd clause for missing properties or an array length mismatch
        if (Object.keys(expected).length !== Object.keys(actual).length)
            throw new AssertionError(message, expected, actual, "Length");

        // Iterate over object keys/values recursively checking for equality
        for (const key of Object.keys(expected))
            assertEquals(message, expected[key], actual[key]);

        return;
    }

    throw new AssertionError(message, expected, actual);
}

/**
 * Asserts "expected" is not "actual",
 * failing the assertion (via Error) if they are the same.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
export function assertNotEquals(
    message: string,
    expected: unknown,
    actual: unknown
): void {
    try {
        // We do not care about the message so an empty string is used
        assertEquals("", expected, actual);
    } catch (_) {
        return;
    }
    // If reached, no error was thrown
    throw new Error(`${message}: values were equal`);
}
