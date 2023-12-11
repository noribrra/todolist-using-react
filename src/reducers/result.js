export function redus(carent, action) {
  if (action.type === "add") {
    return Number(action.ac.num1) + Number(action.ac.num2);
  } else if (action.type === "sub") {
    return Number(action.ac.num1) - Number(action.ac.num2);
  } else if (action.type === "mul") {
    return Number(action.ac.num1) * Number(action.ac.num2);
  } else if (action.type === "div") {
    return Number(action.ac.num1) / Number(action.ac.num2);
  }
}
