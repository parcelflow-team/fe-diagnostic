const parcels = [
    { id: "PF-12", destination: "Amman", status: "in_transit" },
    { id: "PF-14", destination: "Aqaba", status: "pending" },
    { id: "PF-17", destination: "Zarqa", status: "delivered" },
    { id: "PF-19", destination: "Irbid", status: "delivered" },
    { id: "PF-45", destination: "Salt", status: "pending" }
];

function getInTransit(parcels) {
    return parcels.filter(parcel => parcel.status === "in_transit");
}

function getLabels(parcels) {
    return parcels.map(parcel => parcel.id + " → " + parcel.destination);
}

console.log(getInTransit(parcels));
console.log(getLabels(parcels));

const parcelInput = document.getElementById("parcel_name");
const addButton = document.getElementById("parcel_button");
const parcelList = document.getElementById("parcel_list");

addButton.addEventListener("click", function () {
    const text = parcelInput.value.trim();
    if (text !== "") {
        const li = document.createElement("li");
        li.textContent = text;
        parcelList.appendChild(li);
        parcelInput.value = "";
    }
});

const newParcels = [...parcels, { id: "PF-77", destination: "madaba", status: "in_transit" }];
const newList = newParcels.map((parcel) => {
    const { id, status } = parcel;
    return `${id}: ${status}`;
});
console.log(newList);
console.log(parcels[0].address?.city);

const fetchBox = document.getElementById("Fetch");

fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(function (response) {
        if (!response.ok) {
            throw new Error("Not found");
        }
        return response.json();
    })
    .then(function (data) {
        fetchBox.textContent = data.id + " " + data.title;
    })
    .catch(function () {
        fetchBox.textContent = "Not found";
    });