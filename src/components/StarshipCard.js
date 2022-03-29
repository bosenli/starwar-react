function StarshipCard (props){
    return(
        <div>
           <div className="cards">{props.data.name}</div> 
        </div>
    )
}

export default StarshipCard