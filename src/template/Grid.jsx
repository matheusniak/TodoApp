import React from "react";

/* Grid simples: cols string "12 6 4 3" => col-12 col-sm-6 col-md-4 col-lg-3 */
export default function Grid({ cols = "12", children }) {
  function toCssClasses(numbers) {
    const colsArr = numbers ? numbers.split(" ") : [];
    const classes = [];
    if (colsArr[0]) classes.push(`col-${colsArr[0]}`);
    if (colsArr[1]) classes.push(`col-sm-${colsArr[1]}`);
    if (colsArr[2]) classes.push(`col-md-${colsArr[2]}`);
    if (colsArr[3]) classes.push(`col-lg-${colsArr[3]}`);
    return classes.join(" ");
  }

  const gridClasses = toCssClasses(cols);
  return <div className={gridClasses}>{children}</div>;
}
