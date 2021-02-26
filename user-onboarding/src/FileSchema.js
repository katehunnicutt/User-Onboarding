import * as yup from 'yup'

const fileSchema = yup.object().shape({
    username: yup.string()
        .trim()
        .required('username is required'),
    email: yup.string()
        .trim()
        .required(' a valid email is required'),
    password: yup.string()
        .trim()
        .required('a valid password is required'),
    termsOfService: yup.boolean(),
})

export default fileSchema