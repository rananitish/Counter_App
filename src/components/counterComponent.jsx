import React, {Component} from 'react';

class Counter extends Component {
    formatCount(){
        //const{count}=this.state;
        return this.props.counter.value===0?'ZERO':this.props.counter.value;
    }
 

    
    render() {
        
        let variale2=this.getBadgeClasses();
       
      
      
       
        return ( 
            <div> 
            <h4>{this.props.counter.id}</h4>
            <span style={{fontSize:14}} className={this.getBadgeClasses()}>{this.formatCount()}</span>
            <button onClick={()=>this.props.onIncreament(this.props.counter)} className='btn btn-primary btn-sm'>Increament</button>
            
            <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger btn-sm m-2">DELETE</button>
           
            
            
            
           
            </div>)


        }
        getBadgeClasses(){
            let variale ='badge m-2 badge-';
            variale+=this.props.counter.value===0 ? 'warning':'primary';
            return variale;
        }

 
    }

    export default Counter;