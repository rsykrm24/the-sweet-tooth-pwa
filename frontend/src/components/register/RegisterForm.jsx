import VisibilityIcon from '@mui/icons-material/Visibility';
import { grey } from "@mui/material/colors"
import { useState, useEffect } from "react"

export default function RegisterForm(props) {
  let [tipe, setTipe] = useState("password")
  let [kelas, setKelas] = useState("border-orange-900")

  // Logika untuk toggle visibility password
  function typing(e) {
    e.preventDefault()
    setTipe(tipe === "password" ? "text" : "password")
  }

  // Menggunakan useEffect untuk mengecek perubahan password dan retype password
  useEffect(() => {
    if (props.retype !== props.password) {
      setKelas("border-red-600")
    } else {
      setKelas("border-orange-900")
    }
  }, [props.password, props.retype]) // Menjalankan efek ini setiap kali password atau retype berubah

  return (
    <form className="flex flex-col gap-7 mt-16" onSubmit={props.submit}>
      {/* Nama */}
      <input
        type="text"
        placeholder="Full name"
        className="border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full"
        value={props.name}
        onChange={props.nameChange}
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Email"
        className="border-2 border-orange-900 outline-0 py-1 px-2 rounded w-full"
        value={props.email}
        onChange={props.emailChange}
      />

      {/* Password */}
      <div className="flex border-2 border-orange-900 rounded px-2 py-1">
        <input
          type={tipe}
          placeholder="Password"
          className="outline-0 w-full"
          value={props.password}
          onChange={props.passwordChange}
        />
        <button onClick={typing}>
          <VisibilityIcon sx={{ color: grey[400] }} />
        </button>
      </div>

      {/* Re-type Password */}
      <input
        type="password"
        placeholder="Re-type password"
        className={`outline-0 w-full border-2 ${kelas} px-2 py-1 rounded`}
        value={props.retype}
        onChange={props.retypeChange}
      />

      {/* Button Register */}
      <button
        type="submit"
        className={
          (props.name === "" ||
            props.email === "" ||
            props.password === "" ||
            props.retype === "" ||
            props.password !== props.retype)
            ? `bg-white py-1 text-orange-900 border-2 border-orange-900 rounded font-[Nunito] font-bold`
            : `bg-orange-900 py-1 text-white rounded font-[Nunito] font-bold`
        }
      >
        Register
      </button>
    </form>
  )
}