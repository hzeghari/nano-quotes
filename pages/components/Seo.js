import React from 'react'
import { NextSeo } from "next-seo"

export const siteTitle = "Nano Quotes";
export const siteDescription = "Great Quotes Generator";

export default function Seo() {
    return (
        <NextSeo
            title={siteTitle}
            description={siteDescription}
            openGraph={{
                title: "Nano Quotes",
                description: "Great Quotes Generator"
            }}       
        />
    )
}
