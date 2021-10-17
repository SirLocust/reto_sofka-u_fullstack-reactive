const URL_BASE = 'https://powerful-spire-76460.herokuapp.com'
export const fetchQuestions = (): Promise<any> => {
  return fetch(`${URL_BASE}/getAll`)
}
