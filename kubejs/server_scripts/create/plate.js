ServerEvents.recipes(event => {
    ["bronze", "steel", "compressed_iron", "osmium"].forEach(material => {
        event.recipes.create.pressing(
            `worldccore:${material}_plate`,
            Ingredient.of(`#c:ingots/${material}`)
        );
    });
});
