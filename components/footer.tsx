import Link from "next/link";

export function Footer() {
    return (
        <footer className="bg-gray-900 text-gray-400">
            <div className="max-w-7xl mx-auto py-12 px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Brand Section */}
                    <div className="space-y-4">
                        <Link href="/" className="text-2xl font-bold text-white">
                            shortly
                        </Link>
                        <p className="text-gray-400">Making the web more accessible, one short link at a time.</p>
                    </div>

                    {/* Navigation Links */}
                    <nav className="grid grid-cols-2 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Product</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { href: "#features", label: "Features" },
                                    { href: "#how-it-works", label: "How It Works" }
                                ].map((link) => (
                                    <li key={link.href}>
                                        <Link href={link.href} className="hover:text-white transition">
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
                            <ul className="mt-4 space-y-3">
                                {[
                                    { href: "https://github.com/Chirag-varu/shortly", label: "Documentation", external: true },
                                    { href: "#api", label: "API", external: false },
                                    { href: "mailto:chiragvaru.main@gmail.com", label: "Contact", external: true }
                                ].map((link) => (
                                    <li key={link.href}>
                                        {link.external ? (
                                            <a
                                                href={link.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="hover:text-white transition"
                                            >
                                                {link.label}
                                            </a>
                                        ) : (
                                            <Link href={link.href} className="hover:text-white transition">
                                                {link.label}
                                            </Link>
                                        )}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </nav>

                    {/* Social Media Links (Optional) */}
                    <div className="space-y-4">
                        <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Follow Us</h3>
                        <div className="flex flex-col items-start">
                            {[
                                { href: "https://github.com/Chirag-varu", icon: "Github", label: "Github" },
                                { href: "https://www.linkedin.com/in/chiragvaru03/", icon: "Linkedin", label: "linkedin" },
                                { href: "https://hashnode.com/@Chirag-varu", icon: "Hashnode", label: "Instagram" }
                            ].map((social) => (
                                <Link key={social.label} href={social.href} target="_blank" className="text-xl hover:text-white transition" aria-label={social.label}>
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 border-t border-gray-700 pt-6 text-center">
                    <p className="text-sm">
                        &copy; {new Date().getFullYear()} shortly, Made with ❤️ by Chirag Varu
                    </p>
                </div>
            </div>
        </footer>
    );
}
