
const getStoredDonation = () =>{
    const storedJobDonations = localStorage.getItem('Job-applications');
    if(storedJobDonations){
        return JSON.parse(storedJobDonations)
    }
    return[]
}

const saveJobApplication = id =>{
    const storedJobDonations = getStoredDonation();
    const exists = storedJobDonations.find(storedJobDonation => storedJobDonation === id);
    if(!exists){
        storedJobDonations.push(id)
        localStorage.setItem('Job-applications', JSON.stringify(storedJobDonations))
        alert("added succesfully")
    }
    else{
        alert("Allready added")
    }
}

export { getStoredDonation , saveJobApplication }