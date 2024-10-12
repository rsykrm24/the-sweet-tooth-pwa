export default function HelloUser(props) {
  return (
    <div className="bg-orange-900 p-3 py-5">
      <h1 className="font-[Nunito] font-bold text-2xl text-white">Hello,  {props.user}</h1>
    </div>
    )
}