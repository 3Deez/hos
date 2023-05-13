export interface SidebarProps {
  items: Array<SidebarItemProps>
  title: string
  activeIndex?: number
}

export interface SidebarItemProps {
  id: number
  label: string
  link: string
  isActive?: boolean
}
