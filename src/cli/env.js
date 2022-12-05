const parseEnv = () => {
  let result = Object.entries(process.env);
  result.forEach((value) => {
    value.reduce((prev, current) => {
      if (prev.startsWith("RSS_")) {
        console.log(`${prev} = ${current};`);
      }
    });
  });
};

parseEnv();
