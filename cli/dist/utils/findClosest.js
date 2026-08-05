import levenshtein from 'fast-levenshtein';
export function findClosest(name, items) {
    let closest = null;
    let smallestDistance = Infinity;
    for (const item of items) {
        const distance = levenshtein.get(name, item);
        if (distance < smallestDistance) {
            smallestDistance = distance;
            closest = item;
        }
    }
    return smallestDistance <= 3 ? closest : null;
}
