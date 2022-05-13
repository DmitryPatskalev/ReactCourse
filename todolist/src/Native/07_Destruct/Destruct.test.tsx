

test('', ()=>{
    let props = {
        name:'Dima',
        age:37,
        hobby:[
            {hobby1:'Juggling'}, {hobby2:'football'}
        ]
    }

    const {age, name, hobby:[{hobby1:'Juggling'}]} = props



    expect(age).toBe(37)
    expect(name).toBe('Dima')
    expect(hobby.length).toBe(2)
})

