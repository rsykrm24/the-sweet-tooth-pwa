export default function Category(props) {
  return(
    <button className="flex flex-col items-center" onClick={props.func}>
      <img src={props.image} className={`rounded-full w-10/12 ${props.brightness} border-orange-900`}/>
      <h1 className="text-orange-900 font-[Nunito]">{props.title}</h1>
    </button>
    )
}