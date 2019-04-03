export const locationService = {
    getLocations,
};

async function getLocations(): Promise<string[]> {
    const response = await fetch('http://localhost:4000/locations');
    return await response.json();
}
