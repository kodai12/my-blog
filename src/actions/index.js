let nextArticleId = 0
export const addArticle = (title, subTitle, text, updateDate) => ({
  type: 'ADD_ARTICLE',
  id: nextArticleId++,
  title,
  subTitle,
  text,
  updateDate,
})
