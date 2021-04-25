function OhJeezFactory(character) {
    return {
        value: character.id,
        label: character.name,
        status: character.status,
        selected: true,
        image: character.image
    };
}

export { OhJeezFactory };