import React from 'react';

class Cursos extends React.Component {
    render() {
        return (
            <div>
                <h1 className="title"> Conheça nossos cursos</h1>
                {this.props.children}
            </div>
        );
    }
}

export default Cursos;