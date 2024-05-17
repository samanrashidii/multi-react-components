function getImageURL (name, extention = 'png') {
    return new URL(`../assets/${name}.${extention}`, import.meta.url).href;
}

export { getImageURL };