export default function Theme({ label, setLabel, Class,setClass}) {
 
  return (
    <>
      <button className="btn-theme"
        
        onClick={() => {
         
          setLabel(label === "On" ? "Off" : "On");
          setClass(label === "On" ? "app-green" :"app-light" );
        }}
      >
       Theme:{Class}
      </button>
    </>
  );
}