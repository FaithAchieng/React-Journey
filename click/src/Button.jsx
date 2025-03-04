
function Button(){
    const handleClick=(e)=>{
            e.target.textContent="OUCH";
    };
    // let count=0;
    // const handleClick =(name)=> {
    //     if(count <3){
    //         count++;
    //         console.log(`${name} clicked ${count} times`);
    //     }else{
    //         console.log(`${name} stop clicking Me!`);
    //     }
    // };
    // const //handleClick2 = (name) => console.log(`${name} stop clicking me`);
    return(
        // <button onClick={ ()=>handleClick2("Faith")}>
        //     Click Me
        // </button>
        // <button onClick={ ()=>handleClick("Faith")}>
        //         Click Me
        // </button>
        <button onClick={(e)=>handleClick(e)}>
            Click Me!
        </button>
    );
}
export default Button