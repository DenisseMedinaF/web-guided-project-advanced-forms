// Here goes the schema for the form

const formSchema = yup.object().shape({
    username: yup
    .string()
    .trim()
    .required("Username is required!")
    .min(3, "Username must be more than 3 characters!"),
    email: yup
    .string()
    .email("Must be a valid email address")
    .required("You must input an email"),
    role: yup
    .string()
    .oneOf(["instructor", "student", "alumni"], "Role is required to be selected!"),
    civil: yup
    .string()
    .oneOf(["married", "single"], "Must select civil status"),
    coding: yup.boolean(),
    reading: yup.boolean(),
    hiking: yup.boolean()
})

export default formSchema;