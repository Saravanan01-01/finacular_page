import React,{Component} from 'react';
import App from './App';
class Props extends Component
{
    static defaultProps = {
        pokemon: [{id:1, exp: 34},{id:2, exp:33},{id:3, exp:21},{id:4, exp:39},{id:5, exp:87},{id:6, exp:65}] 
     };
    render()
    {
        return(
            <div className="Props">
                <h1>pokiman</h1>
                {this.props.pokemon.map((p) =>(
                    <App id={p.id} exp={p.exp} /> 
                ))}
            </div>
        );
    }
}





export default Props;
