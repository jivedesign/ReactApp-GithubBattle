var React = require('react');
var PropTypes = React.PropTypes; // does type checking
var transparentBg = require('../styles').transparentBg;

// FUNCTIONAL STATELESS COMPONENTS - stateless form of the stuff commented out below.
// this approach removes the need to 'createClass'. Pass in props as arg
function Prompt (props) {
    return (
        <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
            <h1>{props.header}</h1>
            <div className="col-sm-12">
                <form onSubmit={props.onSubmitUser}>
                    <div className="form-group">
                        <input
                            className="form-control"
                            placeholder="Github Username"
                            onChange={props.onUpdateUser}
                            value={props.username}
                            type="text"/>
                    </div>
                    <div className="form-group col-sm-4 col-sm-offset-4">
                        <button className="btn btn-block btn-success" type="submit">Continue</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

// Decouple propTypes
Prompt.PropTypes = {
    header: PropTypes.string.isRequired, //  does type checking and some documentation
    onUpdateUser: PropTypes.func.isRequired,
    onSubmitUser: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired
}
//
// var Prompt = React.createClass({
//     propTypes: {
//         header: propTypes.string.isRequired, //  does type checking and some documentation
//         onUpdateUser: PropTypes.func.isRequired,
//         onSubmitUser: PropTypes.func.isRequired,
//         username: PropTypes.string.isRequired
//     },
//     render: function() {
//         return (
//             <div className="jumbotron col-sm-6 col-sm-offset-3 text-center" style={transparentBg}>
//                 <h1>{this.props.header}</h1>
//                 <div className="col-sm-12">
//                     <form onSubmit={this.props.onSubmitUser}>
//                         <div className="form-group">
//                             <input
//                                 className="form-control"
//                                 placeholder="Github Username"
//                                 onChange={this.props.onUpdateUser}
//                                 value={this.props.username}
//                                 type="text"/>
//                         </div>
//                         <div className="form-group col-sm-4 col-sm-offset-4">
//                             <button className="btn btn-block btn-success" type="submit">Continue</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         )
//     }
// })

module.exports = Prompt;
