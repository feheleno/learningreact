import React from 'react';

const ColorList = ({colors=[], onRate=f=>f, onRemove=f=>f}) =>
<div className=" color-list">
    {(colors.length === 0) ?
        <p>No Colors Listed. (Add a Color)</p> :
        colors.map(color => 
            <Color key={color.id}{...color} />)
    }
</div>