type DewOfLovePageProps = {
  params: Promise<{
    locale: string
    slug?: string[]
  }>
}

export default async function DewOfLovePage({ params }: DewOfLovePageProps) {
  const { slug } = await params
  const section = slug?.[0] ?? 'overview'
  const title = section
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16">
      <div className="rounded-2xl border border-border bg-card p-8 shadow-sm">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-accent">
          Dew of Love
        </p>
        <h1 className="mb-4 text-4xl font-bold text-foreground">{title}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">
          This section is available for the Dew of Love ministry. Add your content here for {title.toLowerCase()}.
        </p>
      </div>
    </div>
  )
}
