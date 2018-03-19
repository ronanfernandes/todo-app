import React from 'react'
import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => {

    const keyHandler = (e) => {
        if( e.key == 'Enter') {
            e.shiftKey ? props.handleSearch() : props.handleAdd()
        } else if(e.key === 'Escape'){
            props.handleClear()
        }
    }

    return (
        <div role='form' className='todoForm'>
        <Grid cols='12 9 10'>
            <input 
                value={props.description}
                onChange={props.handleChange} 
                type="text" 
                onKeyUp={keyHandler}
                className='form-control' 
                id="description" 
                placeholder='Adicione uma tarefa'/>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style="primary" icon='plus'
                onClick={props.handleAdd}>
            </IconButton>
            <IconButton style="info" icon="search"
                onClick={props.handleSearch}>
            </IconButton> 
            <IconButton style="defautl" icon="close"
                onClick={props.handleClear}>
            </IconButton>
        </Grid>
    </div>

    )
}