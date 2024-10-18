import PersonIcon from '@mui/icons-material/Person';

export default function Bio(props) {
  return(
    <div className=" p-3 flex flex-col justify-evenly">
      <div className="flex justify-center">
        <div className="border-4 border-orange-900 rounded-full w-fit flex justify-center items-center  p-3"><PersonIcon style={{color:"brown", height:50, width:50}}/></div>
      </div>
      <div className="font-[Nunito]"> 
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
      </div>
    </div>
    )
}