const choice = (items) => {
    const item = Math.floor(Math.random() * items.length )
    return items[item]
}

const remove = (item, items) => {
    for(let i = 0; i < items.length; i++){
        if (items[i] === item){
            return [...items.slice(0, i), [...items.slice(1 + i)]]
        }
    }
}

export {choice, remove} 