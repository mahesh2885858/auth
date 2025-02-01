export const logger = (filePath: string) => {
  return (message?: string, err?: Error | any) => {
    console.log(
      filePath +
        (message ? " : " + message : "") +
        (err ? (err.message ? " - " + err.message : " - " + err) : "")
    );
  };
};
