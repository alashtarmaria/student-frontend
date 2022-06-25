import React, {useEffect, useState} from "react";

export const StudentForm = ({student, onSubmit, onCancel}) => {
    const [form, setForm] = useState({})
    useEffect(() => {
        setForm({...student});
    }, [student])

    return <form>
        <label>İsim</label>
        <input type="text" value={form.name || ''} onChange={e => setForm({...form, name : e.target.value})}/>
        <br />
        <label>Soyisim</label>
        <input type="text" value={form.surname || ''} onChange={e => setForm({...form, surname : e.target.value})}/>
        <br />
        <label>Vize</label>
        <input type="number" value={form.midterm || ''} onChange={e => setForm({...form, midterm : e.target.value})}/>
        <br />
        <label>Final</label>
        <input type="text" value={form.final || ''} onChange={e => setForm({...form, final : e.target.value})}/>
        <br />
        <button onClick={() => onSubmit({...form, id : student ? student._id : null})}>Onayla</button>
        <button onClick={onCancel}>İptal</button>
    </form>
}