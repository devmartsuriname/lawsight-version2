import type { MenuItemType } from '@/config/admin-menu'

export const findAllParent = (menuItems: MenuItemType[], menuItem: MenuItemType): string[] => {
  let parents: string[] = []
  const parent = findParentMenuItem(menuItems, menuItem.key)
  if (parent) {
    parents.push(parent.key)
    if (parent.key) {
      parents = [...parents, ...findAllParent(menuItems, parent)]
    }
  }
  return parents
}

const findParentMenuItem = (
  menuItems: MenuItemType[],
  childKey: string
): MenuItemType | null => {
  for (const item of menuItems) {
    if (item.children) {
      // Check if this item has the child we're looking for
      if (item.children.some(child => child.key === childKey)) {
        return item
      }
      // Recursively search in nested children
      const found = findParentMenuItem(item.children, childKey)
      if (found) return found
    }
  }
  return null
}

export const getMenuItemFromURL = (items: MenuItemType | MenuItemType[], url: string): MenuItemType | undefined => {
  if (items instanceof Array) {
    for (const item of items) {
      const foundItem = getMenuItemFromURL(item, url)
      if (foundItem) {
        return foundItem
      }
    }
  } else {
    if (items.url == url) return items
    if (items.children != null) {
      for (const item of items.children) {
        if (item.url == url) return item
      }
    }
  }
}

export const findMenuItem = (
  menuItems: MenuItemType[] | undefined,
  menuItemKey: MenuItemType['key'] | undefined
): MenuItemType | null => {
  if (menuItems && menuItemKey) {
    for (const item of menuItems) {
      if (item.key === menuItemKey) {
        return item
      }
      const found = findMenuItem(item.children, menuItemKey)
      if (found) return found
    }
  }
  return null
}
