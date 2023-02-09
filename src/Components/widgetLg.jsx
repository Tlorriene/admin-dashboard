import '../css/component/widgetLg.css'

function WidgetLg () {
    const Button = ({type})=> {
        return  <button className={"widgetLgButton" + type}>{type}</button>
    };
    return(
        <div className="widgetLg">
            <h3 className="widgetLgTitle">Latest Transactions</h3>
            <table className="widgetLgTable">
                <tr className="widgetLgTr">
                    <th classNames="widgetLgTh">Customer</th>
                    <th classNames="widgetLgTh">Date</th>
                    <th classNames="widgetLgTh">Amount</th>
                    <th classNames="widgetLgTh">Status</th>
                </tr>
                <tr className="widgetLgTr">
                    <td className='widgetLgUser'>
                        <img src="https://images.gr-assets.com/authors/1561336084p8/4123863.jpg" 
                        alt=""
                        className="widgetLgImg"
                    />
                    <span className="widgetLgName">Federico Kereki</span>
                    </td>
                    <td className="widgetLgDate">14 May 2022</td>
                    <td className="widgetLgAmount">£2100.00</td>
                    <td className="widgetLgStatus">
                        <Button type ="Approved"/>
                    </td>
                    </tr>
                    <tr className="widgetLgTr">
                    <td className='widgetLgUser'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU"
                        alt=""
                        className="widgetLgImg"
                    />
                    <span className="widgetLgName">Elon Muscle</span>
                    </td>
                    <td className="widgetLgDate">10 May 2022</td>
                    <td className="widgetLgAmount">£1000.00</td>
                    <td className="widgetLgStatus">
                        <Button type ="Declined"/>
                    </td>
                    </tr>
                    <tr className="widgetLgTr">
                    <td className='widgetLgUser'>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFsohsj7miS2w/profile-displayphoto-shrink_800_800/0/1651377283409?e=1657756800&v=beta&t=rHN6C2GAljYKMZKQkAhR5DZyXfGtPv2r3PCo0Zqw7aU"
                        alt=""
                        className="widgetLgImg"
                    />
                    <span className="widgetLgName">Marcus Page</span>
                    </td>
                    <td className="widgetLgDate">19 May 2022</td>
                    <td className="widgetLgAmount">£4000.00</td>
                    <td className="widgetLgStatus">
                        <Button type ="Pending"/>
                    </td>
                    </tr>
                     
            </table>
        </div>
    );
}

export default WidgetLg;

