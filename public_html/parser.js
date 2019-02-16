function parseCourses() {



    let dataFile = require('./whitingSchoolOfEngineering.json');
    console.log(dataFile[0].Status);

    console.log("array length is: " + dataFile.length);

    var db = firebase.firestore(app);

// Add a new document in collection "courses"
    db.collection("courses").doc("whitingSchoolOfEngineering").set({
        name: "testName",
        term: "testTerm"
    })
        .then(function() {
            console.log("Document successfully written!");
        })
        .catch(function(error) {
            console.error("Error writing document: ", error);
        });

}


parseCourses();