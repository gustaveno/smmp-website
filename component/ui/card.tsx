import Image from 'next/image'
import { cn } from '../../src/lib/cn'

export type ImageCardProps = {
  image: string
  imageAlt: string
  title: string
  caption: string
  className?: string
  imagePriority?: boolean
}

/** A quiet, image-led card for editorial and ministry content. */
export function ImageCard({
  image,
  imageAlt,
  title,
  caption,
  className,
  imagePriority = false,
}: ImageCardProps) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-xl border border-border bg-card shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg',
        className,
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={imagePriority}
          sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-2 p-5">
        <h3 className="text-lg font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm leading-6 text-muted-foreground">
          {caption}
        </p>
      </div>
    </article>
  )
}

/** A horizontal card for compact lists and related content. */
export function HorizontalImageCard({
  image,
  imageAlt,
  title,
  caption,
  className,
  imagePriority = false,
}: ImageCardProps) {
  return (
    <article
      className={cn(
        'group flex min-w-0 gap-4 rounded-xl border border-border bg-card p-3 shadow-sm transition duration-300 hover:shadow-md',
        className,
      )}
    >
      <div className="relative size-24 shrink-0 overflow-hidden rounded-lg bg-muted sm:size-28">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={imagePriority}
          sizes="112px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex min-w-0 flex-col justify-center gap-1.5 py-1">
        <h3 className="truncate text-base font-semibold tracking-tight text-foreground">
          {title}
        </h3>
        <p className="line-clamp-2 text-sm leading-5 text-muted-foreground">
          {caption}
        </p>
      </div>
    </article>
  )
}

/** A featured card with a taller image and a spacious caption block. */
export function FeaturedImageCard({
  image,
  imageAlt,
  title,
  caption,
  className,
  imagePriority = false,
}: ImageCardProps) {
  return (
    <article
      className={cn(
        'group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition duration-300 hover:shadow-xl',
        className,
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={imagePriority}
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-700 group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-col gap-3 p-6 sm:p-8">
        <h3 className="text-2xl font-semibold leading-tight tracking-tight text-foreground">
          {title}
        </h3>
        <p className="line-clamp-3 text-base leading-7 text-muted-foreground">
          {caption}
        </p>
      </div>
    </article>
  )
}

export default ImageCard
