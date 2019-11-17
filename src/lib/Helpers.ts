export function overlap(el1: Element, el2: Element): boolean {
    const rect1 = el1.getBoundingClientRect();
    const rect2 = el2.getBoundingClientRect();
    return rect1.top < rect2.bottom && rect1.bottom > rect2.top && rect1.left <= rect2.right && rect1.right >= rect2.left;
}

export function group<T>(arr: T[], count: number): T[][] {
    const ret = [];
    for (let i = 0; i < Math.ceil(arr.length / count); i++) {
        ret.push(arr.slice(i * count, (i + 1) * count));
    }
    return ret;
}
