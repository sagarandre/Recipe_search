import React, {Component} from 'react';
import {templist} from './templist';


class RecipeList extends Component{

    constructor(props)
    {
        super(props);
        this.state=({
            recipies : templist,
            recipe_id : 0
        })

       
    }

   

    SearchRecipe = (e) => 
    {
        const searchText = e.target.value;
       let list = templist.filter(recipe => recipe.name.includes(searchText));
       if(list.length !==0)
       {
        this.setState({
            recipies: list
        })
       }
      
    }


    GoToDetails = (id) => {

        const {setvisibility,handledetails} = this.props;
        setvisibility(1);
        handledetails(id);

    }

    render()
    {
        let list =  this.state.recipies.map((item) => 
        <React.Fragment key={item.id}>
                  
                  
                   <div className="col-lg-4 col-md-6 col-sm-6 col-xs-6">
                    <div className="card">
                     <div className="card-title"> <h4 > {item.name} </h4></div>
                    <img className="card-img-top"  src={item.image_url} alt={item.name} height="200px" />
                   
                   
                      
                     
                       <button className="btn btn-info" onClick={() => this.GoToDetails(item.id)}>Details</button>
                       </div>
                       </div>
                       
                       </React.Fragment>
        );
      
        return(
                    <React.Fragment>
                        <div>
                            <br /> <br />
                                <span className="label-width">Recipe search:-  </span>
                                <input type="text" name="search" value={this.state.search} onChange={this.SearchRecipe} />
                                <br /> <br />
                        </div>

                    <div className="row">
                            
                            {list}
                        </div>
                    </React.Fragment>
         

          
           )
        
    }
}

export default RecipeList;