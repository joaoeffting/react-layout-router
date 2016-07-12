import React from 'react';

class Curso extends React.Component {
    render() {
        return(
            <h1 className="title"> Curso de {this.props.params.nome} </h1>
        );
    }
}

export default Curso;