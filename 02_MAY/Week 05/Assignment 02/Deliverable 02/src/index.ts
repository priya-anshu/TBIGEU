function convertNotes(): void {
    const g: string[] = ["E0", "E1", "E2", "E3", "E4", "E5", "E6", "E7", "E8", "E9", "E10", "E11", "E12",
                         "A0", "A1", "A2", "A3", "A4", "A5", "A6", "A7", "A8", "A9", "A10", "A11", "A12",
                         "D0", "D1", "D2", "D3", "D4", "D5", "D6", "D7", "D8", "D9", "D10", "D11", "D12",
                         "G0", "G1", "G2", "G3", "G4", "G5", "G6", "G7", "G8", "G9", "G10", "G11", "G12",
                         "B0", "B1", "B2", "B3", "B4", "B5", "B6", "B7", "B8", "B9", "B10", "B11", "B12",
                         "e0", "e1", "e2", "e3", "e4", "e5", "e6", "e7", "e8", "e9", "e10", "e11", "e12"];

    const p: string[] = ["E2", "F2", "F2#", "G2", "G2#", "A2", "A2#", "B2", "C3", "C3#", "D3", "D3#", "E3",
                         "A2", "A2#", "B2", "C3", "C3#", "D3", "D3#", "E3", "F3", "F3#", "G3", "G3#", "A3",
                         "D3", "D3#", "E3", "F3", "F3#", "G4", "G4#", "A4", "A4#", "B4", "C4", "C4#", "D4",
                         "G3", "G3#", "A3", "A3#", "B3", "C4", "C4#", "D4", "D4#", "E4", "F4", "F4#", "G4",
                         "B3", "C4", "C4#", "D4", "D4#", "E4", "F4", "F4#", "G4", "G4#", "A4", "A4#", "B4",
                         "e4", "F4", "F4#", "G4", "G4#", "A4", "A4#", "B4", "C5", "C5#", "D5", "D5#", "e5"];

    const inputElement = document.getElementById("inputNotes") as HTMLInputElement;
    const outElement = document.getElementById("output") as HTMLElement;

    if (!inputElement || !outElement) {
        console.error("Missing input or output element");
        return;
    }

    const input: string = inputElement.value;
    const notesArray: string[] = input.split(" ");
    const convertedNotes: string[] = [];

    notesArray.forEach((note: string) => {
        const index: number = g.indexOf(note);
        if (index !== -1) {
            convertedNotes.push(p[index]);
        }
    });

    outElement.innerHTML = "<br>Corresponding Piano notes: <br><br>" + convertedNotes.join("   ");
}

// Bind the function to the button click event
document.getElementById("convertButton")?.addEventListener("click", convertNotes);