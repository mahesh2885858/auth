export const logger = (filePath) => {
    return (message, err) => {
        console.log(filePath +
            (message ? " : " + message : "") +
            (err ? (err.message ? " - " + err.message : " - " + err) : ""));
    };
};
//# sourceMappingURL=createLogger.js.map