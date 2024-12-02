function capitalize(str) {
    // after testing i found out that this if is not needed
    // because charAt and toUpperCase can handle empty strings without exceptions
    // if (!str) return str;

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export default capitalize;