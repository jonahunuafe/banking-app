import { Link } from 'lucide-react'
import React from 'react'

const SideBar = ({ user }: SiderbarProps) => {
  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link href="/" className="mb-12 cursor-pointer items-center gap-2">
        </Link>
      </nav>
    </section>
  )
}

export default SideBar