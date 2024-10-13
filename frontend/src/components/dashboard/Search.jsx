import SearchIcon from '@mui/icons-material/Search';
import { brown } from "@mui/material/colors"

export default function Search(props) {
  return (
    <form onSubmit={props.func} className="border-2 border-orange-900 flex justify-between px-2 rounded mt-2">
      <input type="text" value={props.value} onChange={props.change} className="outline-none w-full"/>
      <button type="submit">
        <SearchIcon sx={{ color:brown[400] }}/>
      </button>
    </form>
    )
}