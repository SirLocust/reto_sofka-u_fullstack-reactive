const URL_BASE = ''
export const fetchQuestions = (): Promise<any> => {
  return fetch(`${URL_BASE}/getAll`)
}
