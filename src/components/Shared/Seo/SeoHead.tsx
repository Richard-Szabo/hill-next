import Head from "next/head"

type SeoHeadProps = {
  title: string
  description: string
  image?: string
  url: string
}

export default function SeoHead({ title, description, image, url }: SeoHeadProps) {
  const siteName = "Hill Medical"
  const fullTitle = `${title} | ${siteName}`
  const defaultImage = image || "/images/seo-default.jpg"

  return (
    <Head>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={defaultImage} />
      <meta property="og:url" content={url} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={defaultImage} />

      <link rel="canonical" href={url} />
    </Head>
  )
}
