const ListItem = ({id, label, percentage}) => {
    <li key={id} className="item">
        <span className="label">{label}</span>
        <span className="percentage">{percentage}</span>
    </li> 
}



export const Statistics = ({ data}) => {
    return (
        <section class="statistics">
    <h2 className="title">Upload stats</h2>

    <ul className="stat-list">
                <ListItem
                    id={1}
                    label={".docx"}
                    percentage={22}
                />
                <ListItem
                    id={2}
                    label={".pdf"}
                    percentage={4}
                />
                <ListItem
                    id={3}
                    label={".mp3"}
                    percentage={17}
                />
                <ListItem
                    id={4}
                    label={ ".psd"}
                    percentage={47}/>
  </ul>
</section>
    )
    
}