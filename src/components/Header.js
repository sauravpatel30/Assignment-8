import { useLocation } from 'react-router-dom';

import '../App.css'

const Header = ({title, onAdd, showAddTask }) => {
    const loc = useLocation()
    return (
        <header>
            <h1 class="headding" >{title}
                { loc.pathname === '/' && <input class={showAddTask ? 'btncl' : 'btn'} type="button" onClick={onAdd} value={showAddTask ? 'Close' : 'Add'}/>}
            </h1>
        </header>
    );
}

export default Header
