"use client"

import Link from "next/link";
import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaTwitter
} from "react-icons/fa";

const StyledLink = ({ href, label, className }: { href: string, label: string, className?: string }) => (
    <Link href={href} className={className || "m-0 text-xs sm:text-lg md:text-lg lg:text-lg xl:text-lg 2xl:text-lg"}>{label}</Link>
)

const MediaIcons = () => (
    <div className="flex gap-[8px] px-[20px] box-border">
        <Link href="#" target="_blank"> <FaFacebookF className="mx-3 text-white" /> </Link>
        <Link href="#" target="_blank"> <FaTwitter className="mx-3 text-white" /> </Link>
        <Link href="#" target="_blank"> <FaInstagram className="mx-3 text-white" /> </Link>
        <Link href="#" target="_blank"> <FaLinkedinIn className="mx-3 text-white" /> </Link>
    </div>
)

export default function Navbar() {

    return (
        <div className="flex flex-row fixed top-0 left-0 w-full h-[80px] justify-around items-center justify-items-center rounded-b-md bg-blue-900 text-white font-sans font-normal shadow-md shadow-black">
            <StyledLink href="/" className="text-2xl text-center text-white mx-[20px]" label="Blogify"></StyledLink>
            <StyledLink href="/" label="Home" />
            <StyledLink href="/technology" label="Technology" />
            <StyledLink href="/photography" label="Photography" />
            <StyledLink href="/sports" label="Sports" />
            <StyledLink href="/about" label="About" />
            <MediaIcons />
        </div>
    );

}
