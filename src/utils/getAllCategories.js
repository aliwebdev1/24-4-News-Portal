export const getAllCategories = async () => {
    const res = await fetch("https://the-news-portal-server.vercel.app/categories", {
        next: {
            revalidate: 30
        }
    })
    return res.json()
}