import JournalDetail from "./JournalDetail";
import './JournalList.css';
import BarChart from "./BarChart";
const JournalList = ({ journalEntries, removeEntry, updateEntry, chartData }) => {
    if (journalEntries.length === 0) return <h2>Loading...</h2>
    console.log(journalEntries);
    const journalList = journalEntries.map((entry) => {
        return (
            <JournalDetail entry={entry} removeEntry={removeEntry} key={entry._id} updateEntry={updateEntry} />
        )
    });


    return (
        <>
            <div className="journal_list">
                <ul className="no_marker">
                    {journalList}
                </ul>
                <BarChart data={journalEntries}/>
            </div>
        </>
    )
}

export default JournalList;