const Stack = () => {
    const data = [];
    return {
        push: (elem) => data.push(elem),
        pop: () => data.pop(),
        read: () => data[data.length -1],
    };
};

export default Stack;