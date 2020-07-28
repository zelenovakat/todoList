export function updateObjectInArrayById(array, selectedItem) {
  return array.map((item) => {
    if (item.id !== selectedItem.id) {
      // This isn't the item we care about - keep it as-is
      return item
    }

    // Otherwise, this is the one we want - return an updated value
    return {
      ...item,
      ...selectedItem,
    }
  })
}

export function formatDate(date) {
  const options = { weekday: "long", month: "long", year: "numeric", day: "numeric" }

  return date.toLocaleDateString("en-US", options)
}

export const deleteObjectInArray = (array, name) => {
  return array.filter((item) => item.name !== name)
}
