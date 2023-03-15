export const changeForm = (event, form, setForm) => {
    setForm({ ...form, [event.target.name]: event.target.value });
};