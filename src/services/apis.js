
let REACT_APP_BASE_URL="https://fullstackblogsapp-4.onrender.com/api/v1"
export const endpoints={
    SIGNUP_API:REACT_APP_BASE_URL+"/signup",
    LOGIN_API:REACT_APP_BASE_URL+"/login",
    GET_BLOGS_API:REACT_APP_BASE_URL+"/getAllBlogs",
    CREATE_BLOGS_API:REACT_APP_BASE_URL+"/createBlog",
    GET_USER_DETAILS:REACT_APP_BASE_URL+"/getUserBlogs",
    DELETE_BLOG:REACT_APP_BASE_URL+"/deleteBlog"
}