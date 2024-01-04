import { google } from "googleapis";

export async function getDatabaseRows() {
    const auth = new google.auth.GoogleAuth({ 
        keyFile: "credentials.json",
        scopes: "https://www.googleapis.com/auth/spreadsheets"
    })
    
    const client = await auth.getClient(); 
    
    const spreadsheetId = "1mUMi6oCo-z3Gr7rlYDii5cC1ZxJa3jwN1RTCbM2m7mU";
    
    const googleSheets = google.sheets({
        version: "v4",
        auth: client
    });
    
    // const meta = await googleSheets.spreadsheets.get({
    //     auth: auth,
    //     spreadsheetId: spreadsheetId,
    // });
    
    const getRows = await googleSheets.spreadsheets.values.get({
        auth,
        spreadsheetId,
        range: "Sheet1!A2:B4"
    });

    return getRows.data.values;
}
