const forbes = require('../index')
const axios = require('axios')

forbes.list({ limit: 1, filter: { state: 'california' } }).then(res => {
    console.log(res)
})

test('forbes', () => {
    expect(forbes).toBeDefined()
    expect(typeof forbes).toEqual('object')
})

test('list', () => {
    const limit = Math.round(Math.random() * (400 - 1) + 1)
    expect(forbes.list).toBeDefined()
    expect(typeof forbes.list).toEqual('function')
    const validParams = [
        {},
        { filter: 'youngest' },
        { filter: 'oldest' },
        { filter: 'women' },
        { filter: 'female' },
        { filter: 'men' },
        { filter: 'male' },
        { filter: 'real-time' },
        { filter: { state: 'canada' } },
        { filter: { state: 'florida' } },
        { filter: { state: 'texas' } },
        { filter: { industry: '' } },
        { filter: { industry: 'tech' } },
        { filter: { industry: 'technology' } },
        { filter: { industry: 'fashion' } },
        { filter: { industry: 'finance' } },
        { filter: { industry: 'investments' } },
        { limit, filter: 'youngest' },
        { limit, filter: 'oldest' },
        { limit, filter: 'women' },
        { limit, filter: 'female' },
        { limit: 5, filter: 'men' },
        { limit, filter: 'male' },
        { limit, filter: 'real-time' },
        { limit, filter: { state: 'canada' } },
        { limit: '4', filter: { state: 'florida' } },
        { limit, filter: { state: 'texas' } },
        { limit: '123', filter: { industry: 'tech' } },
        { limit, filter: { industry: 'technology' } },
        { limit, filter: { industry: 'fashion' } },
        { limit, filter: { industry: 'finance' } },
        { limit, filter: { industry: 'investments' } },
    ]

    validParams.forEach(async param => {
        const result = await forbes.list(param)
        expect(forbes.list).toBeDefined()
        expect(typeof result).toEqual('object')
        expect(result.length).toEqual(limit)
        expect(result).toEqual(expect.arrayContaining(result))
    })

    const invalidParams = [
        null,
        undefined,
        Symbol(0),
        0,
        () => { },
        'boom!',
        { filter: null },
        { filter: undefined },
        { filter: [] },
        { filter: () => { } },
        { filter: 1 },
        { filter: Symbol('1') },
        { filter: 'tests' },
        { filter: 'should' },
        { filter: 'be' },
        { filter: 'failing' },
        { limit: null, filter: 'youngest' },
        { limit: undefined, filter: 'oldest' },
        { limit: 'not number', filter: 'women' },
        { limit: '123avcbdz', filter: 'female' },
        { limit, filter: { state: null } },
        { limit, filter: { state: undefined } },
        { limit, filter: { state: '' } },
        { limit, filter: { industry: '' } },
        { limit, filter: { industry: null } },
        { limit, filter: { industry: undefined } },
        { limit, filter: { should: '' } },
        { limit, filter: { throw: 'qwerty' } },
        { limit, filter: { error: 'qwerty' } },
        { limit, filter: { now: 'qwerty' } }
    ]
    
    invalidParams.forEach(async param => {
        try {
            expect(forbes.list).toBeDefined()
            expect(typeof forbes.list).toEqual('function')
            await forbes.list(param)
            expect(true).toBe(false)
        } catch (err) {
            expect(err).toBeDefined()
            expect(typeof err).toEqual('object')
        }
    })
})
