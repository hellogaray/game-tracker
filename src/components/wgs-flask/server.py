#!/usr/bin/env python3

from flask import Flask
import wikipedia

app = Flask(__name__)
search = "gta v" 

# API Route
@app.route("/wikiCategories")
def wikiCategories():
    """
    Scrapes all categories of a wikipedia article to get a list of available console (current gen: PS5, PS4, Xbox Series X, Xbox One, Nintendo Swithc, and PC.)
    Args: search (game): string of with the name of the game
    Returns: list: json file containing a list of all consoles where the game is available.
    """
    
    console_list = []  # Create an empty list for consoles.
    searchGame = wikipedia.page(search)
    gameCategory = searchGame.categories  # List for categories
    gameTitle = [searchGame.title]  # List for title
    gameImages = []  # List for image

    for images in searchGame.images:
        # Try to find the image that is a cover using cover in image name.
        if "cover" in images:
            gameImages.append(images)

    for categories in gameCategory:
        # Creates a list of where the game is available depending on the categories it finds on the page.
        if categories == "PlayStation 5 games":
            console_list.append("Playstation 5")
        elif categories == "PlayStation 4 games":
            console_list.append("Playstation 4")
        elif categories == "Xbox One games":
            console_list.append("Xbox One")
        elif categories == "Xbox Series X and Series S games":
            console_list.append("Xbox Series X/S")
        elif categories == "Windows games":
            console_list.append("PC")
        elif categories == "Nintendo Switch games":
            console_list.append("Nintendo Switch")
    
    # Add any other to return.        
    return {
        "wikiCategories": console_list,
        "wikiTitles": gameTitle,
        "wikiImages": gameImages,
    }


if __name__ == "__main__":
    app.run(debug=True)
