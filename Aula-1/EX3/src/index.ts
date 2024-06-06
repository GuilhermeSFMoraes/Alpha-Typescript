function word (data: string | number[], start: number, end: number ): string | number[]{
    if (typeof data === "string"){
        return data.substring(start, end + 1);
    }

    return data.slice(start, end + 1);
}

console.log(word([12,40,56,88], 0, 2));
console.log(word("typescript", 3, 7));