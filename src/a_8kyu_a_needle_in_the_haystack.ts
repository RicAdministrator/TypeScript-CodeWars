export function findNeedle(haystack: any[]): string {
    let returnVal = "needle not found";

    haystack.forEach(function (value, index) {
        if (value && (typeof value === 'string' || value instanceof String) && value.toString() === "needle")
            returnVal = "found the needle at position " + index.toString();
    });

    return returnVal;
}