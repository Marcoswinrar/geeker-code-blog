export const GetPostGridCols = (index) => {

  const Lengths = {
    0: 6,
    1: 3,
    2: 3
  }

  return Lengths[index] || 3 
}