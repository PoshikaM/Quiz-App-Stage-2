import { Component } from "react";

class QuizApp extends Component{
    constructor(props){
        super(props)

        this.state = {
            index : 0
        }
    }

    handleNext = () => {
        // console.log(this.state.index)

        if(this.state.index == this.props.Data.length - 1){
            this.setState({index : 0})
        }else{
            this.setState({index : this.state.index + 1})
        }
    }

    handlePrev = () => {
        // console.log(this.state.index)
        
        if(this.state.index == 0){
            this.setState({index : this.props.Data.length - 1})
        }else{
            this.setState({index : this.state.index - 1})
        }
    }

    handleQuit = () => {
        alert("Are you sure you ant to quit?")
        {this.setState({index : this.state.index + 1})}
    }

    render(){

        let arr = this.state.index;

        return(
            <div className="entire">
            <div>
                <h1>Question</h1>
                <p className="outof">1 of 15</p>
                <p className="question">{this.props.Data[arr].question}</p>
                <div>
                    <div className="firstbtns">
                        <button className="options">{this.props.Data[arr].optionA}</button>
                        <button className="options">{this.props.Data[arr].optionB}</button>
                    </div>
                    <div className="secondbtns">
                        <button className="options">{this.props.Data[arr].optionC}</button>
                        <button className="options">{this.props.Data[arr].optionD}</button>
                    </div>
                </div>
                <div className="upgrade">
                    <button className="prev" onClick={this.handlePrev}>Previous</button>
                    <button className="next" onClick={this.handleNext}>Next</button>
                    <button className="quit" onClick={this.handleQuit}>Quit</button>
                </div>
            </div>
            </div>
        )
    }
}

export default QuizApp;