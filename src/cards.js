import React,{Component} from 'react';
import Card1 from './card';

class Cards extends Component
{
    static defaultProps = {
        card :[{subhead: "Enter Amount", head: "Asset Balance",low:"last updated "},
        {subhead : "Enter Growth Rate", head: "Growth Rate" , low:"inflation" },
        {subhead: "Returns Generated Per Month", head:"Major Investments" ,low:"hi"},
        {subhead: "Age", head: "Financial Independence " ,low:"Optimized "},
        {subhead: "Amount", head: "Average Expenses", low:"3 months average"}]
    }
    render()
    {
        return(
            <div className="Cards">
            {this.props.card.map((p)=>(
                <Card1 id={p.subhead} head ={p.head} low={p.low} />
            ))
            }
            </div>
        );
    }
}

export default Cards