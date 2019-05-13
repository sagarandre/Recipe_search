import React, {Component} from 'react';
import './App.css';
import RecipeList from './Components/RecipeList';
import RecipeDetails from './Components/RecipeDetails';


class App extends Component
{

  constructor(props)
  {
    super(props);
     
    
    this.state=({
      pageIndex : 0,
      searchText: '',
  })
  }

  

  SetStatus = (pageid) => {

    
    this.setState({
      pageIndex:pageid
    })
  }
 
  handledetails = (id) => {
    
    this.setState({
      recipe_id:id
    })
  }

  HandleSearch = (searchText) =>
  {
    
    this.setState({
      searchText:searchText
      
    })
   this.render();
    
  }
  
SetVisibility = () => {

  const index = this.state.pageIndex;

  if(index === 0)
  {
    return(
     <React.Fragment>
       {/* <div className="col-md-12">
       <RecipeSearch HandleSearch={this.HandleSearch} />
       </div> */}
    
     <RecipeList setvisibility={this.SetStatus} handledetails={this.handledetails} HandleSearch={this.HandleSearch} searchText={this.state.searchText} />
     </React.Fragment>
    )
  }
 else if(index === 1)
  {
    return(
      <RecipeDetails setvisibility={this.SetStatus} handledetails ={this.handledetails} id={this.state.recipe_id}  />
    )
  }
}

  render()
  {
    console.log('render');
    return(
      <div className="container">
       
       {this.SetVisibility()}
       
      </div>
    )
  }
}
export default App;
