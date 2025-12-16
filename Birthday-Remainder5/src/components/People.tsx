export default function People({people}){
    const {id,name,age,image}=people;
    return(<>
      
    <div className="person"><img src={image} alt="persone-1"/>
    <div><h4>{name}</h4>
    <p>{age} Years</p></div></div>
    </>)
}