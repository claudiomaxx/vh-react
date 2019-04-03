export const skillService = {
    getSkills,
};

async function getSkills(): Promise<string[]> {
    const response = await fetch('http://localhost:4000/skills');
    return await response.json();
}
