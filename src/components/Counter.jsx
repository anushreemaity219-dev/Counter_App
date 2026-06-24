import useCounter from "../hooks/useCounter";

function Counter({title,initialValue,step}){
    const {count, increment, decrement, reset}= useCounter(initialValue,step);
    return (
        <>
        <div className="card">
            <h2>{title}</h2>
            <p>Count: {count}</p>
        
        <div className="btn-group">
        <button onClick={increment} >Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button className="reset" onClick={reset}>Reset</button>
        </div>
        </div>
        </>
    );
}

const styles={
    container:{
        border:"1px solid black",
        padding:"15px",
        margin:"10px",
        borderRadius:"8px",
        textAlign:"center",
        width:"200px"
    }
};
export default Counter;