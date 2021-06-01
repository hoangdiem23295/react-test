export const getTotalPages = (totalItem, itemPerPage) => {
  console.log(1111)
  if (!totalItem) return 0;
  const num1 = Math.floor(totalItem / itemPerPage);
  const num2 = totalItem / itemPerPage - Math.floor(totalItem / itemPerPage);
  const totalPage = num1 + (num2 > 0 ? 1 : 0);
  return totalPage;
}