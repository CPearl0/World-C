ServerEvents.recipes(event => {
    event.recipes.create.sequenced_assembly(
        "worldccore:circuit_board_gen_1",
        "pneumaticcraft:unassembled_pcb",
        [
            event.recipes.create.deploying("pneumaticcraft:unassembled_pcb", ["pneumaticcraft:unassembled_pcb", "pneumaticcraft:transistor"]),
            event.recipes.create.deploying("pneumaticcraft:unassembled_pcb", ["pneumaticcraft:unassembled_pcb", "pneumaticcraft:capacitor"]),
            event.recipes.create.deploying("pneumaticcraft:unassembled_pcb", ["pneumaticcraft:unassembled_pcb", "pneumaticcraft:transistor"]),
            event.recipes.create.deploying("pneumaticcraft:unassembled_pcb", ["pneumaticcraft:unassembled_pcb", "pneumaticcraft:capacitor"]),
            event.recipes.create.pressing("pneumaticcraft:unassembled_pcb", "pneumaticcraft:unassembled_pcb"),
            event.recipes.create.deploying("pneumaticcraft:unassembled_pcb", ["pneumaticcraft:unassembled_pcb", "minecraft:redstone"]),
            event.recipes.create.pressing("pneumaticcraft:unassembled_pcb", "pneumaticcraft:unassembled_pcb"),
        ],
        "pneumaticcraft:unassembled_pcb"
    );
    event.recipes.create.sequenced_assembly(
        "worldccore:processing_unit_gen_1",
        "#c:plates/silicon",
        [
            event.recipes.create.deploying("worldccore:silicon_plate", ["worldccore:silicon_plate", "worldccore:processing_unit_gen_1_press"]).keepHeldItem(),
            event.recipes.create.deploying("worldccore:silicon_plate", ["worldccore:silicon_plate", "create:copper_sheet"]),
            event.recipes.create.pressing("worldccore:silicon_plate", "worldccore:silicon_plate"),
            event.recipes.create.cutting("worldccore:silicon_plate", "worldccore:silicon_plate"),
            event.recipes.create.deploying("worldccore:silicon_plate", ["worldccore:silicon_plate", "minecraft:redstone"]),
            event.recipes.create.pressing("worldccore:silicon_plate", "worldccore:silicon_plate"),
        ],
        "worldccore:silicon_plate"
    );
    event.recipes.create.sequenced_assembly(
        "worldccore:processor_gen_1",
        "worldccore:circuit_board_gen_1",
        [
            event.recipes.create.deploying("worldccore:circuit_board_gen_1", ["worldccore:circuit_board_gen_1", "worldccore:processing_unit_gen_1"]),
            event.recipes.create.deploying("worldccore:circuit_board_gen_1", ["worldccore:circuit_board_gen_1", "minecraft:redstone"]),
            event.recipes.create.pressing("worldccore:circuit_board_gen_1", "worldccore:circuit_board_gen_1"),
        ],
        "worldccore:circuit_board_gen_1"
    );
});
