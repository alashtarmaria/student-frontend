import React from 'react';

export const StudentList = ({students, onClickUpdate, onClickDelete}) => {
    const renderTable = () => {
        return students.map(student =>
            <tr key={student._id}>

                <td>{student._id}</td>
                <td>{student.name}</td>
                <td>{student.surname}</td>
                <td>{student.midterm}</td>
                <td>{student.final}</td>
                <td>
                    <button onClick={() => onClickUpdate(student)}>Düzenle</button>
                    <button onClick={() => onClickDelete(student)}>Sil</button>
                </td>
            </tr>
        )
    }

    return <table width="690" height="101" border="0" align="center" cellPadding="2" cellSpacing="2">
        <tr>
            <td>Öğrenci Id</td>
            <td>İsim</td>
            <td>Soyisim</td>
            <td>Vize</td>
            <td>Final</td>
            <td>Seçenekler</td>
        </tr>
        <tbody>
        {renderTable()}
        </tbody>
    </table>
}