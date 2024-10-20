export default function OrderByNow(props) {
  return (
    <div className={`fixed z-30 w-full bg-white font-[Nunito] shadow-2xl shadow-black h-1/3 p-3 flex flex-col justify-around duration-200 ${props.buttomClass}`}>
      <div className="flex gap-3">
        <img src={props.image} className="aspect-square object-contain w-2/5"/>
        <div>
          <h1>{props.title}</h1>
          <h1 className="text-xl font-bold text-orange-900">Rp. {props.price}</h1>
          <div className="flex justify-between p-3 items-center">
            <button onClick={props.kurang} className="font-bold bg-orange-900 text-white rounded-full w-2/12 aspect-square p-2">-</button>
            <p>{props.jumlah}</p>
            <button onClick={props.tambah} className="font-bold bg-orange-900 text-white rounded-full w-2/12 aspect-square p-2">+</button>
          </div>
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <button className="border-2 border-orange-900 font-bold text-orange-900 rounded w-full p-3" onClick={props.cancel}>Cancel</button>
        <button className="border-2 border-orange-900 font-bold bg-orange-900 text-white rounded w-full" onClick={props.buy}>Buy Now</button>
      </div>
    </div>
    )
}