const loadData = async () =>{
    url = `https://forbes400.onrender.com/api/forbes400?limit=10`;
    const res = await fetch(url)
    const data = await res.json()
    showData(data)

}

const showData = data => {
    const tableContainer = document.getElementById('table-container');
    data.forEach(singleData => {
        console.log(singleData)
        const tr = document.createElement('tr');
        tr.innerHTML =`
        <th scope="row"
        class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
        ${singleData.personName}
    </th>
    <td class="px-6 py-4">
    ${singleData.city}
    </td>
    <td class="px-6 py-4">
    ${singleData.industries[0]}
    </td>
    <td class="px-6 py-4">
    ${singleData.rank}
    </td>
    <td class="px-6 py-4">
    ${singleData.finalWorth}
    </td>
    <td class="px-6 py-4">
        see
    </td>
        `;
    tr.classList.add('bg-white ')
    tableContainer.appendChild(tr)
    });
}

loadData()