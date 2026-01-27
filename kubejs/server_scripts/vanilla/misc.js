ServerEvents.recipes(event => {
    event.shapeless("minecraft:flint_and_steel", [
        "#c:ingots/steel",
        "minecraft:flint",
    ]).id("minecraft:flint_and_steel");
    event.shaped("4x minecraft:iron_bars", [
        "AAA",
        " A ",
        "AAA",
    ], {
        A: "#c:plates/iron",
    }).id("minecraft:iron_bars");
    event.shaped("minecraft:iron_door", [
        "AA",
        "AA",
        "AA",
    ], {
        A: "#c:plates/iron",
    }).id("minecraft:iron_door");
    event.shaped("minecraft:iron_trapdoor", [
        "A A",
        " A ",
        "A A",
    ], {
        A: "#c:plates/iron",
    }).id("minecraft:iron_trapdoor");
});
