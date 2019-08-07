import React from 'react';

const ColorList = ({colors=[]}) =>
<div className=" color-list">
    {(colors.length === 0) ?
        <p>No Colors Listed. (Add a Color)</p> :
        colors.map(color => <Color keyy{color.id}{...color} />)
    }
</div>