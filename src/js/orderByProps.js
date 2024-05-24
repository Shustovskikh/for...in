export default function orderByProps(obj, order) {
  const result = [];

  for (const prop of order) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      result.push({ key: prop, value: obj[prop] });
    }
  }

  const restProps = Object.keys(obj).filter((prop) => !order.includes(prop)).sort();

  for (const prop of restProps) {
    result.push({ key: prop, value: obj[prop] });
  }

  return result;
}
