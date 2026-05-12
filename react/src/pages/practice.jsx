// fetch and store data in a state and display inside table




//hoc

function hoc(Comp){
    return function enahncedComponent(isLoading, ...props){
        if(isLoading){
            return <h1>loading...</h1>
        }else {
            return <Comp {...props} />
        }
    }
}
function userData(name){
    return(
        <>
          <h1>{name}</h1>
        </>
    )
}
const withLoading = hoc(userData);
withLoading(true, name="Mishal")