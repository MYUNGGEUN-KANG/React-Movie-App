import React from 'react'
 
class Deatil extends React.Component{
    componentDidMount(){
        const { location, history } = this.props;
        if(location.state === undefined){
            history.push('./');
        }
    }
render(){
    const { location } = this.props
    if(location.state)
    { return (
    <div>
        <h2>{location.state.title}</h2> 
        <h3>{location.state.rating}</h3>
        <h5>{location.state.year}</h5>
    </div>
    );
} 
    
    else 
    {
        return null;
    }
  }
}
export default Deatil;