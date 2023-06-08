import style from "./Form.module.css";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import validations from "./validations";


const Form = () => {

    const history = useHistory();

    const [form, setForm] = useState({
        name: '',
        email: '',
        issue: '',
        message: '',
    })

    const [errors, setErrors] = useState({});

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value
        })
        setErrors(validations({
            ...form,
            [event.target.name]: event.target.value
        }))
    };

    const handleSubmit = (event) => {
        // event.preventDefault();
        // dispatch(createRecipe(form))

        history.push(`/`);

        setForm({
            name: '',
            email: '',
            issue: '',
            message: '',
        })
    };

    const isDisabled =  
    form.name.trim() === '' ||
    form.email === '' ||
    form.issue === '' ||
    form.message === '';

    return(
        <div id="contact">
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.formHeader}>
                    <h1>C<span className={style.formTitle}>ontact</span></h1>
                </div>

                <label className={style.label} htmlFor="name">Name: </label>
                <br/>
                <input className={style.input} type='text' name="name" value={form.name} onChange={handleChange} autocomplete="off"/>
                <br/>
                {errors.name && <p className={style.errors}>{errors.name}</p>}

                <label className={style.label} htmlFor="email">email: </label>
                <br/>
                <input className={style.input} type='text' name="email" value={form.email} onChange={handleChange} autocomplete="off"/>
                <br/>
                {errors.email && <p className={style.errors}>{errors.email}</p>}

                <label className={style.label} htmlFor="issue">issue: </label>
                <br/>
                <input className={style.input} type='text' name="issue" value={form.issue} onChange={handleChange} autocomplete="off"/>
                <br/>
                {errors.issue && <p className={style.errors}>{errors.issue}</p>}

                <label className={style.label} htmlFor="message">message: </label>
                <br/>
                <input className={style.input} type='text' name="message" value={form.message} onChange={handleChange} autocomplete="off"/>
                <br/>
                {errors.message && <p className={style.errors}>{errors.message}</p>}

                <button className={style.button} type="submit" disabled={isDisabled}>Send</button>  

            </form>

        </div>
    )
}

export default Form;