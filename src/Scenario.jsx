
function Scenario(){
    return (
        <article>
            <div className="border rounded-lg mx-2 my-2 bg-slate-800">
                <div className="mx-2 p-2">
                    <div className="text-white text-lg font-bold">Kā veidot scenārijus? Cik daudz scenāriju ir vienai funkcionālajai iezīmei?</div>
                    <p className="text-white">Funkcionālajai iezīmei ir vairākas scenārijas. Scenārijus veido pēc ši parauga: </p>
                    <p className="text-white">Given [a Condition]</p>
                    <p className="text-white">When [an Action is invoked]</p>
                    <p className="text-white">Then [an expected Outcome occurs]</p>
                </div>
            </div>
        </article>
    );
}



export default Scenario;