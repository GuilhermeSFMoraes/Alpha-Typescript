function wordsCounter(text: string): number {
    const word = text.split(' ');

    return word.length
}

console.log(wordsCounter("testando o contador"))