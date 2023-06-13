'use server'

import Blog from "../../../models/Contact"
import run from "../../../utils/DBConact"


const Submit = async (data) => {
    try {
        await run()
        await Blog.create(data)
        console.log(data)
    } catch (error) {
        console.log(error)
    }
}

export default Submit