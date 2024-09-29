async function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = {
                id: 1,
                name: "lala",
                age: 25
            };
            console.log("Data berhasil diambil");
            resolve(data);
        }, 2000); 
    });
}

async function getData() {
    try {
        console.log("Mengambil data...");
        const data = await fetchData();
        console.log("Data:", data);
    } catch (error) {
        console.log("Error:", error);
    }
}

getData();