import { sortAsc, sortDesc } from "."

describe('Sort', () => {
    let array = [3, 7, 2, 1, 8, 4, 5, 6]

    it('Hasil sort berdasarkan terkecil', () => {
        const test = sortAsc(array)

        expect(test).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
    })

    it('Hasil sort berdasarkan terbesar', () => {
        const test = sortDesc(array)

        expect(test).toEqual([8, 7, 6, 5, 4, 3, 2, 1])
    })
})