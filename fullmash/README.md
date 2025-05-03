# asdhell
Modpacks voor ASDHell Minecraft server

## Suggestions

### Mods

#### Utility

- [Notes](https://www.curseforge.com/minecraft/mc-mods/notes)
- [Fuel Goes Here](https://www.curseforge.com/minecraft/mc-mods/fuelgoeshere)
- [Completionist's Index](https://www.curseforge.com/minecraft/mc-mods/completionists-index)
- [ModListMemory](https://www.curseforge.com/minecraft/mc-mods/modlistmemory)

### Shaders

- [Complementary Unbound](https://www.curseforge.com/minecraft/shaders/complementary-unbound)

## Contributing

### KubeJS Setup

To get typescript support in kubejs scripts, you will need to generate typings using [ProbeJS](https://www.curseforge.com/minecraft/mc-mods/probejs). To do this, follow the steps below.

1. Download the latest version of this modpack.
2. Enable ProbeJS in the modpack if it hasn't been enabled already.
3. Start up Minecraft with this modpack.
4. Create a new world and enter it. This should generate KubeJS typings with ProbeJS.
5. Go into the instance folder of your modpack.
6. Copy the .probe folder and paste it in the fullmash folder.

The resulting folder structure should look like the following:

```
fullmash
├── .probe
│   ├── classes.txt
│   ├── client
│   │   └── probe-types
│   │       ├── global
│   │       └── packages
│   ├── decompiled
│   ├── images
│   ├── server
│   │   └── probe-types
│   │       ├── global
│   │       └── packages
│   └── startup
│       └── probe-types
│           ├── global
│           └── packages
├── .vscode
├── src
└── ...
```
