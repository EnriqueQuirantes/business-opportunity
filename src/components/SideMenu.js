import React, {Component} from "react";


class SideMenu extends Component{
    render (){
        return (
            <aside className="side-bar">
                <div className="side-bar__overlay" />
                <div className="side-bar__content" />
            </aside>
        )
    }
}
export default SideMenu;