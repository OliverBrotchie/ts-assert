// deno-lint-ignore-file no-explicit-any

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
            throw new Error(message);

        // Gaurd clause for missing properties or an array length mismatch
        if (Object.keys(expected).length !== Object.keys(actual).length)
            throw new Error(message);

        // Iterate over object keys/values recursively checking for equality
        for (const key of Object.keys(expected))
            assertEquals(message, expected[key], actual[key]);

        return;
    }

    throw new Error(message);
}

/**
 * Asserts expected is not actual,
 * failing the assertion (via Error) if they are the same.
 *
 * @param {String} message The comparison message passed by the user
 * @param {*} expected The expected item
 * @param {*} actual The actual item
 */
export function assertNotEquals(
    message: string,
    expected: any,
    actual: any
): void {
    try {
        assertEquals("", expected, actual);
    } catch (_) {
        return;
    }
    throw new Error(message);
}
