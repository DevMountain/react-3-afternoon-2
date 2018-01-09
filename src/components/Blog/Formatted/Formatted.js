import React, { Component } from 'react';

class Formated extends Component {
  render() {
    const { text, type } = this.props;
    const output = text ? newLineFormating( text, type) : null;

    return(
      <span>
        {output}
      </span>
    )
  }
}

function tagSelector( contents, i, type ) {
  if (contents === '') {
    return <br key={i} />
  }

  switch (type) {
    case 'p':
      return <p key={i}>{contents}</p>
    case 'div':
      return <div key={i}>{contents}</div>
    case 'li':
      return <li key={i}>{contents}</li>
    default:
      return null
  }
}

function newLineFormating( str, type = 'p' ) {
  return str.split(/\n/g).map( (c,i) => tagSelector( c, i, type ) );
}

export default Formated;