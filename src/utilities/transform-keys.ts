export function transformKeys(
  keys: string[],
  representation: "string" | "array",
  separator: string
) {
  return representation === "string" ? keys.join(separator) : keys;
}
