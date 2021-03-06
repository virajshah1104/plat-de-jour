import React , {Component} from 'react'
import '../css/book.css';
import styled from "styled-components";
import Restaurants from './Restaurants'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faArrowLeft, faBowlFood } from '@fortawesome/free-solid-svg-icons';
import { HashLink as Link } from 'react-router-hash-link';

const Button2 = styled.button`
background: linear-gradient(to bottom right, #EF4765, #FF9A5A);
border: 0;
border-radius: 8px;
color: black;
cursor: pointer;
display: inline-start;
font-family: -apple-system,system-ui,"Segoe UI",Roboto,Helvetica,Arial,sans-serif;
font-size: 16px;
font-weight: 500;
line-height: 2.5;
outline: transparent;
margin-top:5%;
margin-bottom:5%;
padding: 0rem 8rem;
text-align: center;
text-decoration: none;
transition: box-shadow .2s ease-in-out;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
white-space: nowrap;
margin-inline-end: 1rem;
`;

export class Book extends Component{

  constructor(props){
    super(props)
    this.state = {
      instructions: true,
      lat: this.props.lat,
      lng: this.props.lng
    }
  }

  
  goBack(){
    this.props.setState({showBook: false});
  }

  render(){
    const recipedata ={
      name: this.props.recipe["strMeal"],
      image : this.props.recipe["strMealThumb"],
      instructions : this.props.recipe["strInstructions"],
      Ingredient1: this.props.recipe["strIngredient1"],
      Ingredient2: this.props.recipe["strIngredient2"],
      Ingredient3: this.props.recipe["strIngredient3"],
      Ingredient4: this.props.recipe["strIngredient4"],
      Ingredient5: this.props.recipe["strIngredient5"],
      Ingredient6: this.props.recipe["strIngredient6"],
      Ingredient7: this.props.recipe["strIngredient7"],
      Ingredient8: this.props.recipe["strIngredient8"],
      Ingredient9: this.props.recipe["strIngredient9"],
      Ingredient10: this.props.recipe["strIngredient10"],
      Ingredient11: this.props.recipe["strIngredient11"],
      Ingredient12: this.props.recipe["strIngredient12"],
      Ingredient13: this.props.recipe["strIngredient13"],
      Ingredient14: this.props.recipe["strIngredient14"],
      Ingredient15: this.props.recipe["strIngredient15"],
      Ingredient16: this.props.recipe["strIngredient16"],
      Ingredient17: this.props.recipe["strIngredient17"],
      Ingredient18: this.props.recipe["strIngredient18"],
      Ingredient19: this.props.recipe["strIngredient19"],
      Ingredient20: this.props.recipe["strIngredient20"],
      Measure1: this.props.recipe["strMeasure1"],
      Measure2: this.props.recipe["strMeasure2"],
      Measure3: this.props.recipe["strMeasure3"],
      Measure4: this.props.recipe["strMeasure4"],
      Measure5: this.props.recipe["strMeasure5"],
      Measure6: this.props.recipe["strMeasure6"],
      Measure7: this.props.recipe["strMeasure7"],
      Measure8: this.props.recipe["strMeasure8"],
      Measure9: this.props.recipe["strMeasure9"],
      Measure10: this.props.recipe["strMeasure10"],
      Measure11: this.props.recipe["strMeasure11"],
      Measure12: this.props.recipe["strMeasure12"],
      Measure13: this.props.recipe["strMeasure13"],
      Measure14: this.props.recipe["strMeasure14"],
      Measure15: this.props.recipe["strMeasure15"],
      Measure16: this.props.recipe["strMeasure16"],
      Measure17: this.props.recipe["strMeasure17"],
      Measure18: this.props.recipe["strMeasure18"],
      Measure19: this.props.recipe["strMeasure19"],
      Measure20: this.props.recipe["strMeasure20"],
      youtube : this.props.recipe["strYoutube"],
      source : this.props.recipe["strSource"]
    }

    return (
      <div className='book_css' id='results'>
        <div className='references'>
          <div className='awesome_links'>
          <a href="/#blog"><FontAwesomeIcon className="rest" icon = {faBowlFood}></FontAwesomeIcon></a>
          <a href={recipedata.youtube} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className="youtube" icon = {faYoutube}></FontAwesomeIcon></a>
          <a href={recipedata.source} target="_blank" rel="noopener noreferrer"><FontAwesomeIcon className ="google" icon = {faGoogle}></FontAwesomeIcon></a>
          </div>    
          <Link smooth to="/#start"><FontAwesomeIcon className="backbutton" icon = {faArrowLeft} onClick={() => this.goBack()}></FontAwesomeIcon></Link>
        </div>
        <div className="bookheader">
        <div className="bookheader-content">
        <img className="image-upload2" src = {recipedata.image} alt="recipe"/>
          <h2>{recipedata.name}</h2>
          </div>
          <div className="bookheader-content">
            <Button2 onClick = {()=> this.setState({instructions: true})}> Constituents </Button2>
            <Button2 onClick = {()=> this.setState({instructions: false})}> Instructions</Button2>
          </div>
        </div>
        {this.state.instructions && 
          (
            <table className='gradient__text_copy'>
              <tbody>
                <tr>
                  <th className="tablex"> Ingredients </th>
                  <th className="tablex"> Quantity </th>
                </tr>
                <tr>
                  <th>&nbsp;</th>
                  <th>&nbsp;</th>
                </tr>
                { recipedata.Ingredient1.trim() === "" ? 
                <tr>
                  <th colSpan={2}>No Data Available</th>
                </tr>
                :
                <tr>
                  <th>{recipedata.Ingredient1} </th>
                  <th>{recipedata.Measure1}</th>
                </tr>
                }
                { recipedata.Ingredient2.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient2} </th>
                  <th>{recipedata.Measure2}</th>
                </tr>
                }
                { recipedata.Ingredient3.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient3} </th>
                  <th>{recipedata.Measure3}</th>
                </tr>
                }
                { recipedata.Ingredient4.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient4} </th>
                  <th>{recipedata.Measure4}</th>
                </tr>
                }
                { recipedata.Ingredient5.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient5} </th>
                  <th>{recipedata.Measure5}</th>
                </tr>
                }
                { recipedata.Ingredient6.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient6} </th>
                  <th>{recipedata.Measure6}</th>
                </tr>
                }
                { recipedata.Ingredient7.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient7} </th>
                  <th>{recipedata.Measure7}</th>
                </tr>
                }
                { recipedata.Ingredient8.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient8} </th>
                  <th>{recipedata.Measure8}</th>
                </tr>
                }
                { recipedata.Ingredient9.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient9} </th>
                  <th>{recipedata.Measure9}</th>
                </tr>
                }
                { recipedata.Ingredient10.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient10} </th>
                  <th>{recipedata.Measure10}</th>
                </tr>
                }
                { recipedata.Ingredient11.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient11} </th>
                  <th>{recipedata.Measure11}</th>
                </tr>
                }
                { recipedata.Ingredient12.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient12} </th>
                  <th>{recipedata.Measure12}</th>
                </tr>
                }
                { recipedata.Ingredient13.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient13} </th>
                  <th>{recipedata.Measure13}</th>
                </tr>
                }
                { recipedata.Ingredient14.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient14} </th>
                  <th>{recipedata.Measure14}</th>
                </tr>
                }
                { recipedata.Ingredient15.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient15} </th>
                  <th>{recipedata.Measure15}</th>
                </tr>
                }
                { recipedata.Ingredient16.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient16} </th>
                  <th>{recipedata.Measure16}</th>
                </tr>
                }
                { recipedata.Ingredient17.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient17} </th>
                  <th>{recipedata.Measure17}</th>
                </tr>
                }
                { recipedata.Ingredient18.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient18} </th>
                  <th>{recipedata.Measure18}</th>
                </tr>
                }
                { recipedata.Ingredient19.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient19} </th>
                  <th>{recipedata.Measure19}</th>
                </tr>
                }
                { recipedata.Ingredient20.trim() === "" ? <></>
                :
                <tr>
                  <th> {recipedata.Ingredient20} </th>
                  <th>{recipedata.Measure20}</th>
                </tr>
                }
              </tbody>
            </table>
          )
        }
        {!this.state.instructions && 
          (
          <div className="bookheader-content">
            { recipedata.instructions.trim() === "" ? 
            <p>No Data Available</p>
            :
            <p>{recipedata.instructions}</p>
            }
          </div>
          )
        }
        <hr/>
      <Restaurants restaurants={this.props.restaurants} {...this.state}/>
      <Link smooth to="/#start"><FontAwesomeIcon className="backbutton" icon = {faArrowLeft} onClick={() => this.goBack()}></FontAwesomeIcon></Link>
      </div>
    )
  }
}

export default Book;