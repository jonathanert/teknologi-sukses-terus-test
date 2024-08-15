import No3 from "."

describe('Polindrome', () => {
    it('Hasil polindrome benar', () => {
        const test = No3("Racecar")

        expect(test).toBe(true)
    })

    it('Hasil polindrome salah', () => {
        const test = No3("Jonathan Frontend")

        expect(test).toBe(false)
    })
})