    async function fetchModAPIStats(modname) 
    {
        const url = `https://corsproxy.io/?https://thunderstore.io/api/v1/package-metrics/RigsInRags/${modname}`;

        fetch (url)
            .then (res => res.json())
            .then (data => 
                {
                    const download = data.downloads.toLocaleString();
                    const rating = data.rating_score;

                    document.getElementById(`${modname}-downloads`).textContent = `Total downloads: ${download}`;
                    document.getElementById(`${modname}-ratings`).textContent = `Total likes: ${rating}`;
                })
    };