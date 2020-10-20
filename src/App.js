import React,{ Component } from 'react';
//import logo from './logo.svg';
import Navbar from './components/navbar'
import './App.css';
import Counters from './components/counters';
import Counter from './components/counterComponent';


class App extends Component {
  state = { 
    counters:[
        { id:1,value: 0,},
        { id:2,value: 0,},
        { id:3,value: 0,},
        { id:4,value: 0,}
    ]
 };
 handleInc=(varii5)=>{
    const counters=[...this.state.counters]; //here we clone th counters array

    
    const index=counters.indexOf(varii5);//here varii is {id:1,value:0}
    counters[index]={...varii5};
    
    counters[index].value=counters[index].value+1;
    this.setState({
       counters
    })
  
    
}
handleDelete=(counterId)=>{
    const var2=this.state.counters.filter(c=>c.id!=counterId);
    this.setState({
        counters: var2
    })
    
 }

 handleReset=()=>{
     
      const var3= this.state.counters.map(c=>{
            c.value=0;
            return c;
         });
     
     this.setState({var3})
 };

  render() { 
    return ( 
      <div>
      <Navbar length={this.state.counters.filter(c=>c.value>0).length} />
      <main className="container">
      <Counters increase={this.handleInc} delete={this.handleDelete} reset={this.handleReset} counters={this.state.counters}/>
      </main>
      </div>
     );
  }
}
 
export default App;


