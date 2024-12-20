import { Icons } from '@/components/icons'
import { buttonVariants } from '@/components/ui/button'
import { docsConfig } from '@/config/docs'
import { cn } from '@/lib/utils'
import { type Doc } from 'contentlayer/generated'
import Link from 'next/link'

interface DocsPagerProps {
  doc: Doc
}

export function DocsPager({ doc }: DocsPagerProps) {
  const pager = getPagerForDoc(doc)

  if (!pager) {
    return null
  }

  return (
    <div className='flex flex-row items-center justify-between'>
      {pager?.prev && pager.prev.href && (
        <Link
          href={pager.prev.href}
          className={cn(buttonVariants({ variant: 'ghost' }))}
        >
          <Icons.chevronLeft className='mr-2 size-4' />
          {pager.prev.title}
        </Link>
      )}
      {pager?.next && pager.next.href && (
        <Link
          href={pager.next.href}
          className={cn(buttonVariants({ variant: 'ghost' }), 'ml-auto')}
        >
          {pager.next.title}
          <Icons.chevronRight className='ml-2 size-4' />
        </Link>
      )}
    </div>
  )
}

export function getPagerForDoc(doc: Doc) {
  const flattenedLinks = [null, ...flatten(docsConfig.sidebarNav), null]
  const activeIndex = flattenedLinks.findIndex(
    (link) => doc.slug === link?.href
  )
  const prev = activeIndex !== 0 ? flattenedLinks[activeIndex - 1] : null
  const next =
    activeIndex !== flattenedLinks.length - 1
      ? flattenedLinks[activeIndex + 1]
      : null
  return {
    prev,
    next
  }
}

interface Link {
  title: string
  href?: string
  items?: Link[]
}

export function flatten(links: Link[]): Link[] {
  return links.reduce((flat, link) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    return flat.concat(link.items ? flatten(link.items) : link)
  }, [] as Link[])
}
