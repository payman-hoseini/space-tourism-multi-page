'use client'
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation'

interface Props {
    children : React.ReactElement,
    href : string,
    className : string
}

export default function TransitionLink ({children , ...props} : Props) {
    const pathName = usePathname();
    const router = useRouter();

    function sleep(ms : number) : Promise<void> {
        return new Promise((resolve) => setTimeout(resolve , ms))
    }
    async function handleTransition (e : React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
        e.preventDefault();

        const body = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(500)
        router.push(props.href)
        await sleep(500)
        body?.classList.remove("page-transition");
        
    }
    return (
        <Link onClick={handleTransition} href={props.href} className={`${props.href == pathName ? "border-b-white" : ""} ${props.className}`}>
            {children}
        </Link>
    )

}
