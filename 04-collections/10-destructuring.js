// BEGIN (write your solution here)
export default (cars) => {
    const iter = (items, acc) => {
      if (items.length === 0) {
        return acc;
      }
      const [{ year }, ...rest] = items;
      const newValue = acc[year] ? acc[year] + 1 : 1;
      return iter(rest, { ...acc, [year]: newValue });
    };
  
    return iter(cars, {});
  };
  // END
  