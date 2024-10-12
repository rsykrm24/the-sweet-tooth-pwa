import SearchIcon from '@mui/icons-material/Search';

export default function Search(props) {
  return (
    <form onSubmit={props.func} className="border-2 border-orange-900 flex justify-between px-2 rounded mt-2">
      <input type="text" value={props.value} onChange={props.change} className="w-full"/>
      <button type="submit">
        <SearchIcon />
      </button>
    </form>
    )
}