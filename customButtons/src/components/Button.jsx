export default function Button(props){


    const {className, children , onClick}=props
 
    return (<> <button className={className} onClick={onClick}>{children}</button></>)

}