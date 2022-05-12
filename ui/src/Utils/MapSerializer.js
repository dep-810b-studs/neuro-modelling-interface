function replacer(key, value) {
    if(value instanceof Map) {
        return Object.fromEntries(value);
    } else {
        return value;
    }
}

export default replacer;