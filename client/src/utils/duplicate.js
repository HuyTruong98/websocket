export function duplicatesMessage(arr) {
  const duplicateId = new Set();
  const filterArr = arr.filter((item) => {
    const current_time = item.time;
    const duplicate = duplicateId.has(current_time);
    duplicateId.add(current_time);
    return !duplicate;
  });
  return filterArr;
}
