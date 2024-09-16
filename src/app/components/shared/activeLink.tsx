'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation'

interface Props {
    children : React.ReactElement,
    href : string,
    className : string
}

export default function ActiveLink ({children , ...props} : Props) {
    const pathName = usePathname();
    console.log(pathName)
    return (
        <Link href={props.href} className={`${props.href == pathName ? "border-b-white" : ""} ${props.className}`}>
            {children}
        </Link>
    )

}
