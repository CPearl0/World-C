ServerEvents.recipes(event => {
    event.replaceInput(
        { mod: "pneumaticcraft" },
        "#c:ingots/compressed_iron",
        "#c:plates/compressed_iron"
    );
    event.replaceInput(
        { mod: "pneumaticcraft" },
        "pneumaticcraft:printed_circuit_board",
        "#worldccore:processors/least_gen_1"
    );
});
