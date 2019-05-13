import React, {Component} from 'react';
import {tempdetails} from './tempdetails';

class RecipeDetails extends Component{

    constructor(props)
    {
      super(props);
      
      var result = tempdetails.filter(obj => {
        return obj.id === props.id
      })

      this.state=({
        recipe : result
    })
      
   
    }

    render()
    {
        
       const {setvisibility} = this.props;
const {name,ingredients,author} = this.state.recipe[0];


        return(
            <React.Fragment>
              <div>
                <h1>Recipe details</h1>
                <h2>{name}</h2>
                Author:- <h2>{author} </h2>
                Ingredients :- <h3>{ingredients}</h3>
            <button type="button" className="btn btn-warning" onClick={() => setvisibility(0)} >Go Back</button>
            </div>
            </React.Fragment>
        )
    }
}

export default RecipeDetails;