export default function Categories(props) {
    return (
        <section>
            <ul>
                <li onClick={()=>props.filter("All")}>All</li>
                <li onClick={()=>props.filter("Breakfast")}>Breakfast</li>
                <li onClick={()=>props.filter("Lunch")}>Lunch</li>
                <li onClick={()=>props.filter("Beverages")}>Beverages</li>
            </ul>
        </section>
    )
}