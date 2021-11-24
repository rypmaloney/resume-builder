const EducationForm = (props) => {
    const { thisEd, index, updateEd, changeEd } = props;

    return (
        <div>
            <form onSubmit={(e) => updateEd(e, index)}>
                <label htmlFor="nameInput">Institution:</label>
                <input
                    onChange={(e) => changeEd(e, index)}
                    type="text"
                    id="institution"
                    value={thisEd.institution}
                />
                <br />
                <label htmlFor="address">Date:</label>
                <input
                    onChange={(e) => changeEd(e, index)}
                    type="text"
                    id="year"
                    value={thisEd.year}
                />
                <br />

                <textarea
                    placeholder="Description"
                    rows="5"
                    onChange={(e) => changeEd(e, index)}
                    type="text"
                    id="details"
                    value={thisEd.details}
                />
                <br />
                {/* Use props.index - create a function that updates education[index] */}

                <br />
            </form>
        </div>
    );
};

export default EducationForm;
