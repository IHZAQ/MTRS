# Minecraft Skin to Roblox Converter

This is a **Node.js project** that automatically converts a **Minecraft skin (64×64)** into a Roblox-compatible outfit. It also detects whether the skin is **slim (Alex) or normal (Steve)**.

## Prerequisites

1. **Install Node.js** (if not already installed):  
   - [Download from Node.js official website](https://nodejs.org/) and install it.  
   - Or use an **online Node.js runner** like [Replit](https://replit.com/).

2. **Prepare your skin file**:  
   - Make sure you have a **64×64 Minecraft skin** named **`skin.png`**.
   - **Legacy (64×32) skins are NOT supported**.

## Installation

```sh
# Clone or download this repository
# Navigate to the project directory
# Install dependencies
npm install
```

## Usage

```sh
# Run the script to generate the Roblox-compatible image
npm start
```

### What Happens?
- The script will **automatically detect** if the skin is **Alex (slim) or Steve (normal)**.
- It will **convert the skin** into the correct format for Roblox.
- The output image will be saved in the project directory.

## Notes
- If you get an error, ensure that **`skin.png` exists** and is **64×64 pixels**.
- If you want to run it online, upload the skin file before executing the script.

## License
This project is open-source and free to use!
