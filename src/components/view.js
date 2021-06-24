import React, { Component } from 'react'
import '../App.css';
import './index.css';
import { FaGithubSquare } from 'react-icons/fa';
export class View extends Component {
    constructor(props){
        super(props);
          this.state = {
            expList:[],
            progress:0,
            activeItem:props.item,
     
          }

          this.handleClick = this.handleClick.bind(this)
        };
        handleClick = (e) => {
          if (e.target.classList.contains('view')) {
            this.props.handle(e)
          }
        }

    render() {
        var exp=this.props.item
        return (
          <> { this.state.activeItem &&
            <div className="  view" onClick={(e)=>this.handleClick(e)}>
                <div className="card  bg-dark text-white"  key={exp.id} >
                    <img className="card-img-top images" src={exp.image_url} alt={exp.title}/>
                    <div className="card-body">
                        <h5 className="card-title">{exp.title} </h5>
                        <strong>Description</strong><p className="card-text">{exp.description} </p>
                        <strong>Tools Used</strong> <p>{exp.tools} </p>
                        <p>{ exp.github && <a className="fa" href={exp.github}><FaGithubSquare/></a>}

                        { exp.hosted && <a className="card-link " href={exp.hosted} >Click to visit site</a>}
                        </p>
                    </div>
                </div>
            </div> }
            </>
         )
    }
}

export default View
