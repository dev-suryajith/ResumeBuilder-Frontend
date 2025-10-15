import commonAPI from "./commonAPI"
import BASEURL from "./serverURL"

// 1. Add resume

export const addResumeAPI = async (resume) => {
    return await commonAPI("POST", `${BASEURL}/all-resumes`, resume)
}


// 2. Get resume with ID

export const getResumeAPI = async (id) => {
    return await commonAPI("GET", `${BASEURL}/all-resumes/${id}`, {})
}


//3. get all resume
export const getResumeHistoryAPI = async () => {
    return await commonAPI("GET", `${ BASEURL }/all-resumes`, {})

}
// 4. Edit resume

export const updateResumeAPI = async (id, resume) => {
    return await commonAPI("PUT", `${BASEURL}/all-resumes/${id}`, resume)
}
// 5. Delete resume
export const deleteResumeAPI = async (id) => {
    return await commonAPI("DELETE", `${ BASEURL }/all-resumes/${ id }`)
}