import data from '~~/content/tribute.json'

export const resolvers = {
    Query: {
        categories: () => data.categories,
        tributes: () => data.tributes,
        tributesByCategory: (_: any, { slug }: { slug: string }) =>
            data.tributes.filter(t => t.category === slug),
        tribute: (_: any, { slug }: { slug: string }) =>
            data.tributes.find(t => t.slug === slug)
    }
}
