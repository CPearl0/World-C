ServerEvents.recipes(event => {
    event.shaped("create:empty_blaze_burner", [
        "A A",
        "ABA",
        "CCC",
    ], {
        A: "minecraft:iron_bars",
        B: "#c:netherracks",
        C: "#c:plates/iron",
    }).id("create:crafting/kinetics/empty_blaze_burner");
    event.shaped("create:mechanical_crafter", [
        "ABA",
        "ACA",
        "ADA",
    ], {
        A: "#c:plates/brass",
        B: "create:electron_tube",
        C: "create:brass_casing",
        D: "minecraft:crafter",
    }).id("create:crafting/kinetics/mechanical_crafter");
});
