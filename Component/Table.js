import React,{Component} from 'react'
export default class Table extends Component {
 
    constructor(props){
    super(props);
    this.state={
    
        // todos:[this.props.data]
    }
    this.getHeader = this.getHeader.bind(this);
    this.getRowsData = this.getRowsData.bind(this);
    this.getKeys = this.getKeys.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount= async (e)=>{debugger
        console.log("Did",this.props.data)
    }
    getKeys = function(){
        return Object.keys(this.state.todos[0]);
    }
    
    getHeader = function(){
        var keys = this.getKeys();
        return keys.map((key, index)=>{
        return <th key={key}>{key.toUpperCase()}</th>
        })
    }
    
    getRowsData = function(){
        var items = this.state.todos;
        var keys = this.getKeys();
        return items.map((row, index)=>{
        return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
        })
    }
    
    render() {
        
        console.log("Dida",this.props.data)
        if(this.props.data.length != 0){
            var getKeys = Object.keys(this.props.data[0]);
            var HeadData = new Array()
            HeadData.push(getKeys)
            var Data = (HeadData).map((keyval,index)=>{
            return <tr><RenderRow key={index} keys={getKeys} data={keyval}/></tr>
            })
            
           
        }
        if(HeadData !== ""){
            var TableData = new Array()
            TableData.push(this.props.data)
             
            var TableData = (TableData).map((data,index)=>{
                console.log("data",data)
            }) 
            
        }
        
    return (
    <div>
    <table className="table table-bordered">
    <thead>
    <tr>{Data}</tr>
    </thead>
    <tbody>
    
    </tbody>
    </table>
    </div>
    
    );
    }
   }
   const RenderRow = (props) =>{
    return props.keys.map((key, index)=>{
        console.log("Key",key)
    return <td key={index}>{key}</td>
    })
   }