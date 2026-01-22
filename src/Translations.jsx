function Translations() {
    const rows = [
        { en: "Feature", lv: "Funkcionalitāte" },
        { en: "Rule", lv: "Noteikums" },
        { en: "Background", lv: "Priekšvēsture" },
        { en: "Scenario", lv: "Scenārijs" },
        { en: "Scenario Outline", lv: "Scenārija veidne" },
        { en: "Examples", lv: "Piemēri" },
        { en: "Given", lv: "Ņemot vērā" },
        { en: "When", lv: "Kad" },
        { en: "Then", lv: "Tad" },
        { en: "And", lv: "Un" },
        { en: "But", lv: "Bet" },
        { en: "@tag", lv: "@tags (tegs)" },
    ];

    return (
        <article className="min-h-screen bg-slate-600 p-4">
            <div className="mx-auto w-full max-w-2xl">
                <header className="mb-3">
                    <h1 className="text-xl font-bold tracking-tight text-white">
                        Gherkin termini
                    </h1>
                   
                </header>

                <div className="overflow-hidden rounded-lg border border-white/20  bg-slate-700 shadow">
                    <div className="overflow-x-auto">
                        <table className="min-w-full text-left text-xs text-slate-100">
                            <thead className="bg-slate-800 text-xs font-semibold uppercase tracking-wider text-slate-200">
                                <tr>
                                    <th scope="col" className="px-3 py-2">
                                        Angļu valoda
                                    </th>
                                    <th scope="col" className="px-3 py-2">
                                        Latviešu valoda
                                    </th>
                                </tr>
                            </thead>

                            <tbody className="divide-y divide-white/10">
                                {rows.map((row) => (
                                    <tr key={`${row.en}-${row.lv}`} className="odd:bg-white/0 even:bg-white/5 ">
                                        <td className="whitespace-nowrap px-3 py-2 font-medium text-white">
                                            {row.en}
                                        </td>
                                        <td className="whitespace-nowrap px-3 py-2 text-white/90">
                                            {row.lv}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                
            </div>
        </article>
    );
}

export default Translations;