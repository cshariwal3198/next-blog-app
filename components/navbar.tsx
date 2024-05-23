import Link from "next/link";
import { memo } from "react";

// eslint-disable-next-line react/display-name
export const Navbar = memo(() => {

    console.log('');

    return (
        <div className="flex flex-row gap-5 justify-around">
            <Link href={'/'}>Home</Link>
            <Link href={'/technology'}>Technology</Link>
            <Link href={'/photography'}>Photography</Link>
            <Link href={'/all-posts'}>All Posts</Link>
            <Link href={'/about'}>About</Link>
        </div>
    );
});
