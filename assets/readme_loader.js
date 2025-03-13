async function loadReadme() {
    try {
        const response = await fetch("https://raw.githubusercontent.com/deboraptor/conferences_professionnelles/main/README.md");
        if (!response.ok) throw new Error("Failed to fetch README.md");
        
        const text = await response.text();
        document.getElementById("readme-container").innerHTML = marked.parse(text);
    } catch (error) {
        console.error("Error loading README:", error);
        document.getElementById("readme-container").innerHTML = "<p>Erreur de chargement du README.</p>";
    }
}

loadReadme();