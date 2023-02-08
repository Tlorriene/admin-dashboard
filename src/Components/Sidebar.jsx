import '../css/component.sidebar.css';
import {
    Linestyle,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report,
} from "@material-ui/icons";
import { Link } from 'react-router-dom';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="SidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className='link'>
                            <li className="sidebarListItem">
                            <Linestyle className="sidebarIcon"/>
                            Home
                            </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>
                            Sales    
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    )
}