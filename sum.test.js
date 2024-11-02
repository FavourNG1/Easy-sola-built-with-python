const {sum, fruits} = require('./sum')

test('sum to add 1 + 2 equals 3', () => {
     expect(sum(2,3)).toBe(5)
})

test("check if array contains specific element" , () => {
    const fruits = ["Banana", "Apple", "Orange", "Cucumba", "coconut"]
    expect(fruits).toContain('Apple')
    expect(fruits).toHaveLength(5)
})
