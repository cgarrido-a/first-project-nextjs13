import React from "react"
import Link from 'next/link'

function Navigation() {
    return (
        <ul>
            <li>
                <Link href="/">Index</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
            <li>
                <Link href="/services">Services</Link>
            </li>
        </ul>
    )
}

export default Navigation;