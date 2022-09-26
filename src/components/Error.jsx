function Error(props){
    let dynamicStyles;
    if(props.type === "error"){
        dynamicStyles = "bg-red-500 text-white"
    }
    
    return(
        <div className={`rounded-lg p-1 static w-1/2 self-center mt-4 ${dynamicStyles}`}>
            <span className="uppercase font-semibold">{props.children}</span>
        </div>
    )
}

export default Error;