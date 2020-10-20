import React, { Component } from 'react';   
import Counter from './counterComponent';
//Value and Selected are the attributes and props 
class Counters extends Component {
    
    render() { 
        return ( 
            <div>
            <button onClick={this.props.reset} className="btn btn-primary btn-sm m-2">Reset </button>
            
               {this.props.counters.map(varii=>(
                <Counter key={varii.id} onDelete= {this.props.delete} onIncreament={this.props.increase } 
                counter={varii}>
                <h3>Counter {varii.id}</h3>
                </Counter>))
            }

            </div>
         );
    }
}
 
export default Counters ;