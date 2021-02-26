import React from 'react'

export default function UserForm(props) {
    const {
        values,
        submit,
        change,
        disabled,
        errors,
    } = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }

    const onChange = evt => {
        const {name, value, type, checked} = evt.target
        const valueUsed = type === 'checkbox' ? checked : value
        change(name, valueUsed) 
    }

    return(
        <form className= 'form container' onSubmit={onSubmit}>
        <div className= 'div form container'>
            <button disabled = {disabled}> Submit </button>
            <div className= 'error messages'>
                <div>{errors.username}</div>
                <div>{errors.email}</div>
                <div>{errors.password}</div>
                
            </div>
            <div className= 'form input'>
                <label>Username
                    <input 
                    type='text'
                    name='name'
                    value={values.username}
                    onChange={onChange}
                    />
                </label>
                <label>Email
                    <input 
                    type='text'
                    name='email'
                    value={values.email}
                    onChange={onChange}
                    />
                </label>
                <label>Password
                    <input 
                    type='text'
                    name='password'
                    value={values.password}
                    onChange={onChange}
                    />
                </label>
                <label>Terms of Service
                    <input 
                    type='checkbox'
                    name='termsOfService'
                    checked={values.termsOfService}
                    onChange={onChange}
                    />
                </label>
            </div>
        </div>



        </form>

    )
}

