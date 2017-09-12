const singleton = () => {
    let instance = null;
    let singletonConstructor = function() {
        // 
    };
    return {
            getInstance: () => {
            if (instance === null) {
        instance = new singletonConstructor();
    }
    return instance;
}
};
};