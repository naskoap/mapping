function Building (name,  desc, coords) {
    this.name = name;
    this.desc = desc;
    this.coords = coords;
    L.polygon(coords)
        .addTo(map)
        .bindPopup("Welcome to " + name + "<br>" + desc);
}