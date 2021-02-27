import React from 'react'
import {useForm} from 'react-hook-form'

export default function FormValidation(){
    const {register, handleSubmit} = useForm()
    const onSubmit = (data) => alert(JSON.stringify(data))
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <h2>Form Validation</h2>
            <input name="firstName" ref={register({required: true})} placeholder="First name" />
            <input name="lastName" ref={register({required: true})} placeholder="Last name" />
            <select name="category" ref={register({required: true})}>
                <option value="">Select...</option>
                <option value="A">Category A</option>
                <option value="B">Category B</option>
            </select>
            <input type="submit" />
        </form>
    )
}