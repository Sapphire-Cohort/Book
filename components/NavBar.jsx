import Link from "next/link"
import { Bookmark, ContactRound, House, ShoppingBag } from "lucide-react"

const NavBar = () => {
    const navLinks = [
        {
            href: "/",
            label: "Home",
            icon: House,
        },
        {
            href: "/store",
            label: "Store",
            icon: ShoppingBag
        },
        {
            href: "/wishlist",
            label: "Wishlist",
            icon: Bookmark
        },
        {
            href: "/contact",
            label: "Contact",
            icon: ContactRound
        },
    ];

    return (
        <header>
            <nav className="flex justify-center space-x-10 bg-gray-200 p-4">
                {navLinks.map(({href, label, icon: Icon}) => (
                    <Link
                        key={href}
                        href={href}
                        className="flex items-center space-x-2 text-gray-700 hover:text-gray-900">
                        {Icon && <Icon className="w-4 h-4 mr-1" />}
                        {label}
                    
                    </Link>
                ))}
            </nav>
        </header>
    )
}
export default NavBar