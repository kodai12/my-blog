let nextArticleId = 0
let title = 'test'
let subTitle = 'test'
let text = 'aaaaa'
export const addArticle = (title, subTitle, text, updateDate) => ({
  type: 'ADD_ARTICLE',
  id: nextArticleId++,
  title,
  subTitle,
  text,
  updateDate
})
