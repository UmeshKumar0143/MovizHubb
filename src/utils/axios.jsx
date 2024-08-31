import axios from  'axios'

const instance = axios.create({
    baseURL:"https://api.themoviedb.org/3/",
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxZDc1MDQzMjFkZGU5MzJiMDgxZWNjZWQ3ODU5YTllNiIsIm5iZiI6MTcyNDM0OTcwOC41MTU0NzcsInN1YiI6IjY2Yzc3Yjg1NTEyNWFhOTliOGQ3ZjIyOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.5jSsDqEHC2lT70v_7UIQEdFoWuPzp9Ax2eD3l6ddxzg'
      }
}
)

export default  instance