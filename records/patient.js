use hospitalDB;

db.patients.insertMany([
    {
        patient_id: "PAT1001",
        fullname: "John Doe",
        dob: "1988-05-14",
        gender: "Male",
        bloodgroup: "O+",
        contact: "9791531354",
        allergies: ["penicillin", "peanuts"],
        medicalHistory: [
            {
                diagnosis: "hypertension",
                diagnosedYear: 2020,
                status: "ongoing"
            }
        ],
        visits: [
            {
                visitId: "VST-2026-01",
                date: "2026-08-10",
                doctor: "Dr. Sarah Connor",
                symptoms: ["Dizziness", "Headache"],
                prescription: [
                    {
                        medicine: "Amlodipine",
                        dosage: "5mg daily",
                        duration: "30days"
                    }
                ]
            }
        ]
    }
]);

db.patients.find({ patient_id: "PAT1001" }).pretty();

db.patients.updateOne(
    { patient_id: "PAT1001" },
    {
        $push: {
            visits: {
                visitId: "VST-2026-02",
                date: "2026-09-15",
                doctor: "Dr. Alan",
                symptoms: ["Routine checkup"],
                prescription: []
            }
        }
    }
);