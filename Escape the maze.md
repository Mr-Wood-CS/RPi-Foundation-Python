# Escape the maze

Design and code your own maze escape text-based game.

![Escape the maze illustration](Escape%20the%20maze.assets/page-1-1.png)

## Step 1: What you will make

Design and code a game where the player must collect objects and escape from a house, making sure to avoid all the monsters!

![Example of the text-based game](Escape%20the%20maze.assets/page-1-2.png)

## Step 2: Add a new room

Open the [starter project](https://editor.raspberrypi.org/en/projects/rpg-starter).

Here is a basic maze that represents a house with two rooms. The rooms are both empty for now. Here’s a map of the game:

![Map showing the Hall and Kitchen](Escape%20the%20maze.assets/page-2-1.png)

Press **Run** to start the game. Type `go south` to move from the Hall to the Kitchen, and then `go north` to go back to the Hall again.

What happens when you type in a direction that you cannot go? Type `go west` in the Hall.

### Answer

Look at the code and find the `rooms` variable. The map is coded as a dictionary of rooms:

```python
# A dictionary linking a room to other rooms
rooms = {
    'Hall' : {
        'south' : 'Kitchen'
    },
    'Kitchen' : {
        'north' : 'Hall'
    }
}
```

Each room is a dictionary, and rooms are linked together using directions.

Add a Dining Room to your map, to the east of the Hall. Don’t forget to add a comma to the end of the previous line when you add a new direction.

```python
# A dictionary linking a room to other rooms
rooms = {
    'Hall' : {
        'south' : 'Kitchen',
        'east' : 'Dining Room'
    },
    'Kitchen' : {
        'north' : 'Hall'
    },
    'Dining Room' : {
        'west' : 'Hall'
    }
}
```

![Map with the Dining Room east of the Hall](Escape%20the%20maze.assets/page-3-1.png)

Click **Stop**, then click **Run** to try out the game with your new Dining Room code.

Type `go east` from the Hall to move into the Dining Room, and `go west` to move back to the Hall.

## Step 3: Add items to collect

Add items in the rooms for the player to collect as they move through the maze.

To put an item in a room, you add it to a room’s dictionary. Add a key in the Hall.

```python
# A dictionary linking a room to other rooms
rooms = {
    'Hall' : {
        'south' : 'Kitchen',
        'east' : 'Dining Room',
        'item' : 'key'
    },
```

Remember to put a comma after the line above the new item, or your program won’t run!

Press **Stop** and then **Run**, and you can now see a key in the Hall. You can even pick it up (by typing `get key`) which adds it to your inventory!

## Step 4: Add enemies

Add enemies to some rooms that the player must avoid.

Adding an enemy to a room is the same as adding an item. Add a monster to the Kitchen:

```python
# A dictionary linking a room to other rooms
rooms = {
    'Hall' : {
        'south' : 'Kitchen',
        'east' : 'Dining Room',
        'item' : 'key'
    },
    'Kitchen' : {
        'north' : 'Hall',
        'item' : 'monster'
    },
```

If the player enters a room with a monster in, the game ends. Test out your code by going into the Kitchen, which now contains a monster.

Click **Stop** then click **Run** and type `go south`.

```text
---------------------------
You are in the Hall
Inventory : []
You see a key
---------------------------
>go south
A monster has got you... GAME OVER!
```

## Step 5: Winning the game

Give your player a mission which needs to be completed to win the game.

The player wins by getting to the garden with the key and the magic potion. Here’s a map of the game.

![Map with a key in the Hall, a monster in the Kitchen, a potion in the Dining Room, and the Garden](Escape%20the%20maze.assets/page-5-1.png)

Add a garden to the south of the dining room. Remember to link the garden to the dining room.

```python
# A dictionary linking a room to other rooms
rooms = {
    'Hall' : {
        'south' : 'Kitchen',
        'east' : 'Dining Room',
        'item' : 'key'
    },
    'Kitchen' : {
        'north' : 'Hall',
        'item' : 'monster'
    },
    'Dining Room' : {
        'west' : 'Hall',
        'south' : 'Garden'
    },
    'Garden' : {
        'north' : 'Dining Room'
    }
}
```

Add a potion to the dining room.

```python
'Dining Room' : {
    'west' : 'Hall',
    'south' : 'Garden',
    'item' : 'potion'
},
```

Add this code at the end of the Python file so that the player wins the game when they get to the garden with the key and the potion. Make sure the code is indented, in line with the code above it.

```python
    if currentRoom == 'Garden' and 'key' in inventory and 'potion' in inventory:
        print('You escaped the house... YOU WIN!')
        break
```

Click **Stop** then click **Run** to test your game to make sure the player can win!

```text
---------------------------
You are in the Hall
Inventory : []
You see a key
---------------------------
>get key
You picked up the key
---------------------------
You are in the Hall
Inventory : ['key']
---------------------------
>go east
---------------------------
You are in the Dining Room
Inventory : ['key']
You see a potion
---------------------------
>get potion
You picked up the potion
---------------------------
You are in the Dining Room
Inventory : ['key', 'potion']
---------------------------
>go south
You escaped the house... YOU WIN!
```

Finally, let’s add some instructions to your game, so that the player knows what they have to do. Edit the `showInstructions()` function to include more information.

```python
def showInstructions():
    # Print a main menu and the commands
    print(
        """
          RPG Game
          ========

          Get to the Garden with a key and a potion
          Avoid the monsters!

          Commands:
          go [direction]
          get [item]
          """
    )
```

Test your game and you should see your new instructions.

## Challenge

Use what you’ve learnt to create your own game. Here are some ideas:

- Add more rooms to your game. Remember to add a door to/from one of the other rooms!
- Add more items. You can add anything that you think would be helpful in trying to escape the house! For example, a shield or a magic potion.
- Add more monsters to your game, to make it harder to escape the house!
- Modify the condition for winning - where does the player have to get to, and with which objects in their inventory?
- Add stairs to your map and have more than one level of rooms, by typing `go up` and `go down`.

---

Published by [Raspberry Pi Foundation](https://www.raspberrypi.org) under a [Creative Commons Attribution-ShareAlike 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).

[View project and license on GitHub](https://github.com/RaspberryPiLearning/rpg)

[Accessibility](https://www.raspberrypi.org/accessibility/) · [Cookies Policy](https://www.raspberrypi.org/cookies/) · [Privacy Policy](https://www.raspberrypi.org/privacy/) · [Translate for us](https://projects.raspberrypi.org/en/projects/translating-for-raspberry-pi)
