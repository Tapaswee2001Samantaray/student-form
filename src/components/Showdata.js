import './Table.css'
import { useLocation } from "react-router-dom";

export default function Showdata() {
    const location = useLocation();
    return (
        <div>
            {(location.state) ? (
                <div className='box'>
                    <table>
                        <tr>
                            <th>Name </th>
                            <td>{location.state.name}</td>
                        </tr>
                        <tr>
                            <th>Class </th>
                            <td>{location.state.class}</td>
                        </tr>
                        <tr>
                            <th>Roll No </th>
                            <td>{location.state.roll}</td>
                        </tr>
                        <tr>
                            <th>Date of Birth </th>
                            <td>{location.state.dob}</td>
                        </tr>
                    </table>
                </div>
            ) : <div>{"No Data Found"}</div>}
        </div>
    )
}